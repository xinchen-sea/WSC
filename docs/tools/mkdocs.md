## 开始
MkDocs Material 是一个基于 MkDocs 的静态站点生成器，
专为创建美观且功能丰富的文档网站而设计。它支持 Markdown 语法，
无需深入了解 HTML、CSS 或 JavaScript，即可快速搭建专业的文档站点 。
MkDocs Material 提供了丰富的主题定制选项，支持多语言，
并且内置了强大的搜索功能，适用于各种设备。


??? note "官方介绍"
    Material for MkDocs is a powerful documentation framework on top of MkDocs, a static site generator for project documentation.1 If you're familiar with Python, you can install Material for MkDocs with pip, the Python package manager. If not, we recommend using docker.

## 安装
具体安装流程自己查看官方教程吧（参考资料有）

### 安装
首先，使用 pip 安装 MkDocs和MkDocs Material：

    pip install mkdocs
    pip install mkdocs-material


### 配置
在项目目录中运行以下命令来配置环境：
    
    mkdocs build

在项目根目录下创建或编辑 mkdocs.yml 文件，添加以下内容：
        
    theme:
      name: material

### 创建站点
在项目目录中运行以下命令来启动 MkDocs 服务器：

    mkdocs serve

现在，你可以通过浏览器访问 http://127.0.0.1:8000 查看你的文档站点。


### cmd 指令

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

??? note "安装代码" 
	```Shell
    pip install mkdocs
    pip install mkdocs-material
    pip install mkdocs-material-extensions
    pip install mkdocs-git-revision-date-localized-plugin
    pip install mkdocs-statistics-plugin
    pip install mkdocs-heti-plugin
	```

## 发布
具体发布流程也自己看官方教程吧

### 编写`workflow`文件

在仓库上方有actions选项，点击new workflow，
我这里选择了自己编写的workflow文件,也可以[使用手册上的教学](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)，
貌似也有针对Mkdocs的模板,run里面写上自己需要的就好啦，
也可以运行`pip install requirement.txt`

??? note "我的yml文件"

    ```yml  title="ci.yml"
    name: deploy
    
    on:
      push:
        branches:
          - master 
          - main
    
    permissions:
      contents: write
    
    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Configure Git Credentials
            run: |
              git config user.name github-actions[bot]
              git config user.email 41898282+github-actions[bot]@users.noreply.github.com
          - uses: actions/setup-python@v5
            with:
              python-version: 3.x
          - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
          - uses: actions/cache@v4
            with:
              key: mkdocs-material-${{ env.cache_id }}
              path: .cache
              restore-keys: |
                mkdocs-material-
          - run: pip install mkdocs-material
          - run: pip install mkdocs-material-extensions
          - run: pip install mkdocs-statistics-plugin
          - run: pip install mkdocs-minify-plugin
          - run: pip install mkdocs-git-revision-date-localized-plugin
          - run: pip install mkdocs-heti-plugin
          - run: pip install mkdocs-glightbox-plugin
          - run: mkdocs gh-deploy --force
    
    ```

### 设置GitHub Pages
Actions 不是和 Pages 联动的，
所以你需要手动部署到 Pages 上。

大致步骤如下：

```mermaid
graph LR
  A(打开仓库) --> B(Settings)
  B --> C(Pages)
  C --> D(Source)
  D --> |选择|F(deploy from a branch)

```
选择分支为 gh-pages和 /(root) ，这是 Actions 自动构建的文件所存放的分支和根目录，
之后save保存就好了。
然后刷新一下设置页面，跳转对应的网页就好啦。
其他的部署操作就自行摸索吧。

## 设置
MkDocs 材料 提供了多种自定义文档的选项。可以参考一下官方文档。


## 参考资料

[mkdocs for material手册](https://squidfunk.github.io/mkdocs-material/)      

不会就找[chatGPT](https://chatgpt.com/)或者[Kimi](https://kimi.moonshot.cn/):smile:

[GitHub Pages 文档自动化部署 - MkDocs - Arisa | Blog](https://blog.arisa.moe/blog/2022/220407-github-pages/#vcs)

[github pages绑定域名-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1454059)

