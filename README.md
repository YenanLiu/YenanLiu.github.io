# Chen Liu — Personal Academic Website

最新版：2026-10-26。包含完整 HTML、CSS、JavaScript、24 篇论文数据、全部论文配图、头像和机构标志。纯静态网站，无需安装依赖或构建。

## 本地预览

直接打开 index.html，或在当前文件夹运行：

```bash
python3 -m http.server 8000
```

然后访问 http://localhost:8000。

## 上传 GitHub Pages

1. 解压 ZIP，将此文件夹内的全部内容上传至 GitHub 仓库根目录（index.html 应在根目录，不要多套一层文件夹）。
2. 在仓库 Settings → Pages 中选择 Deploy from a branch。
3. 选择 main 分支和 / (root)，保存并等待发布。
4. 可使用 username.github.io 仓库作为个人主页，或普通仓库作为项目网站。资源使用相对路径，两种方式均可。

## 内容维护

- index.html：所有页面内容与论文条目。
- assets/style.css：样式与响应式布局。
- assets/site.js：论文分类、第一作者筛选和 More 展开/收起。
- papers.json：论文结构化数据备份；页面并不动态读取它，修改论文时请同时更新 index.html。
- assets/：全部图片、图标，以及保留的替代版本。
- ASSETS.csv：素材清单与页面使用状态。

图像保留原始分辨率。论文图与机构标志的权利归原作者或所属机构；此导出不赋予额外版权许可。论文与项目来源链接已保留在页面中。

本包不含部署凭证、Git 历史或平台配置，可独立托管。
