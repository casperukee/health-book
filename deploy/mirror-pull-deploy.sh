#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/casperukee/health-book.git}"
BRANCH="${BRANCH:-main}"
ROOT="${ROOT:-/srv/health-book}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"

REPO_DIR="$ROOT/repo"
RELEASES_DIR="$ROOT/releases"
SHARED_DIR="$ROOT/shared"
LOG_DIR="$SHARED_DIR/logs"
LOCK_FILE="$SHARED_DIR/deploy.lock"
LAST_SHA_FILE="$SHARED_DIR/last-deployed-sha"

mkdir -p "$RELEASES_DIR" "$LOG_DIR"

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  echo "Another mirror deployment is already running."
  exit 0
fi

if [ ! -d "$REPO_DIR/.git" ]; then
  rm -rf "$REPO_DIR"
  git clone --depth=1 --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"
git fetch origin "$BRANCH" --depth=1

REMOTE_SHA="$(git rev-parse "origin/$BRANCH")"
CURRENT_SHA="$(git rev-parse HEAD 2>/dev/null || true)"
LAST_DEPLOYED_SHA="$(cat "$LAST_SHA_FILE" 2>/dev/null || true)"

if [ "$CURRENT_SHA" = "$REMOTE_SHA" ] && [ "$LAST_DEPLOYED_SHA" = "$REMOTE_SHA" ] && [ -L "$ROOT/current" ]; then
  echo "Already up to date: $REMOTE_SHA"
  exit 0
fi

if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git checkout -q "$BRANCH"
else
  git checkout -q -b "$BRANCH"
fi
git reset --hard "$REMOTE_SHA"

npm ci
VITEPRESS_BASE=/ npm run docs:build

RELEASE_ID="$(date -u +%Y%m%d%H%M%S)-${REMOTE_SHA:0:7}"
RELEASE_DIR="$RELEASES_DIR/$RELEASE_ID"
mkdir -p "$RELEASE_DIR"
rsync -a --delete .vitepress/dist/ "$RELEASE_DIR/"
ln -sfn "$RELEASE_DIR" "$ROOT/current"
printf '%s\n' "$REMOTE_SHA" > "$LAST_SHA_FILE"

find "$RELEASES_DIR" -maxdepth 1 -mindepth 1 -type d | sort | head -n "-$KEEP_RELEASES" | xargs -r rm -rf

echo "Deployed $REMOTE_SHA to $RELEASE_DIR"
