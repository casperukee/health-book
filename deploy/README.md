# 吉隆坡镜像部署

GitHub Pages 继续作为海外和开源主站。`health.mindarae.com` 用阿里云吉隆坡服务器作为国内友好镜像。

当前镜像入口：

```text
https://health.mindarae.com
```

当前系统已迁移到新的阿里云吉隆坡服务器，生产入口支持 HTTPS。公开传播、二维码和分享卡片优先使用 `https://health.mindarae.com`。

## 目录设计

服务器站点根目录：

```text
/srv/health-book/
  current -> /srv/health-book/releases/<release-id>
  repo/
  releases/
    <release-id>/
  shared/
    deploy.lock
    last-deployed-sha
    logs/
```

说明：

- `repo/` 是服务器本机拉取的 GitHub 仓库；
- `releases/` 保存每次部署产物；
- `current` 是 Nginx 实际读取的软链接；
- 每次部署先上传到新 release，再原子切换 `current`；
- 如果部署失败，旧 `current` 不受影响；
- 需要回滚时，把 `current` 指回旧 release 即可。

## 构建方式

GitHub Pages 使用默认 base：

```bash
npm run docs:build
```

吉隆坡镜像使用域名根路径：

```bash
VITEPRESS_BASE=/ npm run docs:build
```

## 推荐自动同步方式：服务器自拉取

当前推荐让吉隆坡服务器自己定时同步公开 GitHub 仓库，而不是依赖 GitHub Actions SSH 到服务器。

优点：

- 不需要在 GitHub Secrets 里保存服务器私钥；
- 服务器只拉取公开仓库，权限更简单；
- GitHub Pages 仍然是主站，镜像站通常在几分钟内跟上；
- 构建失败时不会影响现有 `current` 目录。

安装文件：

```text
deploy/mirror-pull-deploy.sh -> /usr/local/bin/health-book-mirror-deploy
deploy/health-book-mirror.service -> /etc/systemd/system/health-book-mirror.service
deploy/health-book-mirror.timer -> /etc/systemd/system/health-book-mirror.timer
```

服务器上启用：

```bash
chmod +x /usr/local/bin/health-book-mirror-deploy
systemctl daemon-reload
systemctl enable --now health-book-mirror.timer
systemctl start health-book-mirror.service
```

查看状态：

```bash
systemctl status health-book-mirror.service --no-pager
systemctl list-timers --all | grep health-book
journalctl -u health-book-mirror.service -n 80 --no-pager
```

## 反馈统计

站点正文页末尾的轻量反馈按钮和页面路由访问会通过 `logo.svg` 静态资源请求写入 Nginx access log，例如：

```text
/logo.svg?hb_feedback=1&action=pageview&page=...
```

本仓库提供一个本地聚合脚本，用于统计国内镜像站的页面阅读、点赞、转发复制、意见入口和 GitHub CTA 点击：

```bash
npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1
```

支持 `.gz` 轮转日志：

```bash
npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1 /var/log/nginx/access.log.2.gz
```

这个脚本只做聚合统计，不引入 API、数据库、登录或个人健康信息收集。GitHub Pages 的服务器日志不可用，因此主要统计对象是 `health.mindarae.com` 镜像站。

默认每 5 分钟检查一次 `main`。如果 GitHub Pages 部署成功后 `main` 没有新提交，镜像不会重复构建；如果有新提交，服务器会拉取、构建、生成新 release，并切换 `current`。

## Nginx

模板见：

```text
deploy/nginx-health-book.conf
```

建议安装到：

```text
/etc/nginx/sites-available/health-book.conf
/etc/nginx/sites-enabled/health-book.conf -> /etc/nginx/sites-available/health-book.conf
```

当前仓库模板仍保留最小 HTTP server block，便于作为 Nginx 基础配置参考。生产服务器已经具备 HTTPS 能力；如果后续重建服务器，应优先恢复 `https://health.mindarae.com`，再确认是否由 Nginx、反向代理或其他入口组件负责 TLS。

## 可选方式：GitHub Actions SSH 部署

仓库中仍保留一个可选的 GitHub Actions 镜像部署工作流。如果以后希望在 GitHub Pages 部署后由 GitHub runner 主动推送到服务器，需要在 GitHub 仓库中配置：

```text
MIRROR_SSH_KEY
```

内容是允许登录 `root@<mirror-host>` 的私钥。

GitHub repository variables:

```text
MIRROR_DEPLOY_ENABLED=true
MIRROR_HOST=<mirror-host>
```

未启用该变量时，镜像部署 job 不会运行。

当前已采用服务器自同步方案时，可以不启用这个 Actions job。
