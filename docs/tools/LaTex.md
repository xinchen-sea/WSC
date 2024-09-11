### 参考资料
[LaTex入门](https://oi-wiki.org/tools/latex/)

[LaTeX详细教程+技巧总结](https://blog.csdn.net/NSJim/article/details/109066847)

[LaTex教程](https://www.latexstudio.net/LearnLaTeX/)

### `TexLive` + `Texstudio`| windows 的 `LaTeX `环境与编译器

[【LaTex】LaTex的下载与安装](https://blog.csdn.net/Nicolecocol/article/details/136968456)

### `LaTeX` + `Latex Workshop` + VScode | 论文神器

??? note "安装流程"
    下载`Latex Workshop`插件。
    
    按`ctrl+ , `进入设置，点击右上角的“白纸”图标，选择`setting.json`。
    
    在`setting.json`中加入以下语句
    
    添加完成后，重新启动VScode。
    
    ```json
    // LATEX settings
    "editor.minimap.enabled": true,
    "latex-workshop.latex.tools": [	
        {
            "name": "pdflatex",
            "command": "pdflatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"
            ]
        },
        {
            "name": "xelatex",
            "command": "xelatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"
            ]
        },
        {
            "name": "bibtex",
            "command": "bibtex",
            "args": [
                "%DOCFILE%"
            ]
        }
    ],
    "latex-workshop.latex.recipes": [
        {
            "name": "xelatex",
            "tools": [
                "xelatex"
            ],
        },
        {
            "name": "pdflatex",
            "tools": [
                "pdflatex"
            ]
        },
        {
            "name": "xe->bib->xe->xe",
            "tools": [
                "xelatex",
                "bibtex",
                "xelatex",
                "xelatex"
            ]
        },
        {
            "name": "pdf->bib->pdf->pdf",
            "tools": [
                "pdflatex",
                "bibtex",
                "pdflatex",
                "pdflatex"
            ]
        }
    ],
    "latex-workshop.latex.clean.fileTypes": [
        "*.aux",
        "*.bbl",
        "*.blg",
        "*.idx",
        "*.ind",
        "*.lof",
        "*.lot",
        "*.out",
        "*.toc",
        "*.acn",
        "*.acr",
        "*.alg",
        "*.glg",
        "*.glo",
        "*.gls",
        "*.ist",
        "*.fls",
        "*.log",
        "*.fdb_latexmk"
    ],
    //tex文件浏览器，可选项为"none" "browser" "tab" "external"
    "latex-workshop.view.pdf.viewer": "tab",
    //自动编译tex文件
    "latex-workshop.latex.autoBuild.run": "onFileChange",
    //显示内容菜单：（1）编译文件；（2）定位游标
    "latex-workshop.showContextMenu": true,
    //显示错误
    "latex-workshop.message.error.show": false,
    //弹窗显示警告
    "latex-workshop.message.warning.show": false,
    //从使用的包中自动补全命令和环境
    "latex-workshop.intellisense.package.enabled": true,
    //设置为never，为不清除辅助文件
    "latex-workshop.latex.autoClean.run": "never",
    //设置vscode编译tex文档时的默认编译链
    "latex-workshop.latex.recipe.default": "lastUsed",
    // 用于反向同步的内部查看器的键绑定。ctrl/cmd +点击(默认)或双击
    // ctrl-click 代表 ctrl + 左键单击
    // double-click 代表左键双击反向定位
    "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",
    ```

