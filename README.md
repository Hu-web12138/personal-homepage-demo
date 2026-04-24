# 林知远个人主页演示

这是一个由 `个人主页资料.md` 生成的静态个人主页演示项目，适合直接发布到 GitHub Pages。

## 文件结构

- `index.html`：个人主页主体结构
- `style.css`：页面视觉样式、响应式布局和动效
- `script.js`：导航、高亮、滚动进度、复制邮箱等交互
- `个人主页资料.md`：原始 Markdown 资料源
- `.nojekyll`：让 GitHub Pages 直接按静态站点发布

## 本地预览

直接用浏览器打开 `index.html` 即可预览。

也可以在当前目录启动任意静态服务器，例如：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## GitHub Pages 发布建议

1. 创建公开仓库，例如 `personal-homepage-demo`。
2. 将本目录中的所有文件推送到仓库 `main` 分支。
3. 进入 GitHub 仓库的 `Settings > Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 1 到 3 分钟，GitHub 会生成公网访问地址。

本次演示仓库：

```text
https://github.com/Hu-web12138/personal-homepage-demo
```

GitHub Pages 公网地址：

```text
https://Hu-web12138.github.io/personal-homepage-demo/
```
