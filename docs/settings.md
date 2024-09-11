
**下面介绍本网页的一些关于配色的设定，您可以根据您的喜好修改以下配色：**

笔者才疏学浅，错误在所难免，有些设置按键不可行的地方烦劳读者们多试几次~

Material for MkDocs支持两种配色方案：一种是浅色模式，称为`default` ，另一种是深色模式，称为 `slate`。单击图块以更改配色方案：  
默认：浅色模式`default`

!!! tip "快来试试吧"
    <div class="mdx-switch">
      <button data-md-color-scheme="default"><code>default</code></button>
      <button data-md-color-scheme="slate"><code>slate</code></button>
    </div>
    <script>
      var buttons = document.querySelectorAll("button[data-md-color-scheme]")
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          document.body.setAttribute("data-md-color-switching", "")
          var attr = this.getAttribute("data-md-color-scheme")
          document.body.setAttribute("data-md-color-scheme", attr)
          var name = document.querySelector("#__code_0 code span.l")
          name.textContent = attr
          setTimeout(function() {
            document.body.removeAttribute("data-md-color-switching")
          })
        })
      })
    </script>

`primary`用于导航栏、侧边栏锚点文本、文本链接、按钮的填充色或文字颜色和其他几个组件的颜色。单击图块按钮以更改`primary`：    
<!--（ps：搜索框只有两种背景色，所以请选择合适的配色方案之后再修改`primary`）--> 
浅色(default)模式下默认颜色：`indigo`；深色(slate)模式下默认颜色：`black`

!!! tip "快来试试吧"
    <div class="mdx-switch">
      <button data-md-color-primary="red"><code>red</code></button>
      <button data-md-color-primary="pink"><code>pink</code></button>
      <button data-md-color-primary="purple"><code>purple</code></button>
      <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
      <button data-md-color-primary="indigo"><code>indigo</code></button>
      <button data-md-color-primary="blue"><code>blue</code></button>
      <button data-md-color-primary="light-blue"><code>light blue</code></button>
      <button data-md-color-primary="cyan"><code>cyan</code></button>
      <button data-md-color-primary="teal"><code>teal</code></button>
      <button data-md-color-primary="green"><code>green</code></button>
      <button data-md-color-primary="light-green"><code>light green</code></button>
      <button data-md-color-primary="lime"><code>lime</code></button>
      <button data-md-color-primary="yellow"><code>yellow</code></button>
      <button data-md-color-primary="amber"><code>amber</code></button>
      <button data-md-color-primary="orange"><code>orange</code></button>
      <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
      <button data-md-color-primary="brown"><code>brown</code></button>
      <button data-md-color-primary="grey"><code>grey</code></button>
      <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
      <button data-md-color-primary="black"><code>black</code></button>
      <button data-md-color-primary="white"><code>white</code></button>
    </div>
    <script>
      var buttons = document.querySelectorAll("button[data-md-color-primary]")
      buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          var attr = this.getAttribute("data-md-color-primary")
          document.body.setAttribute("data-md-color-primary", attr)
          var name = document.querySelector("#__code_1 code span.l")
          name.textContent = attr.replace("-", " ")
        })
      })
    </script>

`accent` 用于表示可以与之交互的元素的颜色，例如悬停链接、按钮的强调色和滚动条。单击图块按钮以更改`accent`：  
    (ps:本页面的图块按钮是修改过的，不由`accent`控制，`default`和`slate`两个由`primary`控制)     
默认颜色：`indigo`   查看按钮强调色变化可试试将鼠标悬停在下面这个按钮上     
<button class="md-button" style="padding: 5px 5px; font-size: 14px;  margin: 10px 20px">:material-button-pointer:鼠标放这试试？(不填充按钮)</button>
<button class="md-button md-button--primary" style="padding: 5px 5px; font-size: 14px;  margin: 10px 20px">:material-button-pointer:鼠标放这试试？(填充按钮)</button>

!!! tip "快来试试吧"
    <div class="mdx-switch">
      <button data-md-color-accent="red"><code>red</code></button>
      <button data-md-color-accent="pink"><code>pink</code></button>
      <button data-md-color-accent="purple"><code>purple</code></button>
      <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
      <button data-md-color-accent="indigo"><code>indigo</code></button>
      <button data-md-color-accent="blue"><code>blue</code></button>
      <button data-md-color-accent="light-blue"><code>light blue</code></button>
      <button data-md-color-accent="cyan"><code>cyan</code></button>
      <button data-md-color-accent="teal"><code>teal</code></button>
      <button data-md-color-accent="green"><code>green</code></button>
      <button data-md-color-accent="light-green"><code>light green</code></button>
      <button data-md-color-accent="lime"><code>lime</code></button>
      <button data-md-color-accent="yellow"><code>yellow</code></button>
      <button data-md-color-accent="amber"><code>amber</code></button>
      <button data-md-color-accent="orange"><code>orange</code></button>
      <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
    </div>
    <script>
      var buttons = document.querySelectorAll("button[data-md-color-accent]")
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          var attr = this.getAttribute("data-md-color-accent")
          document.body.setAttribute("data-md-color-accent", attr)
          var name = document.querySelector("#__code_2 code span.l")
          name.textContent = attr.replace("-", " ")
        })
      })
    </script>

`background`用于除去导航栏（header）、选项卡（tabs）、页脚（footer）、主容器（main）以外的背景颜色。单击图快按钮以更改`background`:     
浅色(default)模式下默认颜色：`default(#f3f3f3)`；深色模式下默认颜色：`slate(#2e2e2e)`

!!! tip "快来试试吧"
    <div class="bg-switch">
        <button data-bg-color="#f44336" class="btn-red">red</button>
        <button data-bg-color="#e91e63" class="btn-pink">pink</button>
        <button data-bg-color="#9c27b0" class="btn-purple">purple</button>
        <button data-bg-color="#673ab7" class="btn-deep-purple">deep purple</button>
        <button data-bg-color="#3f51b5" class="btn-indigo">indigo</button>
        <button data-bg-color="#2196f3" class="btn-blue">blue</button>
        <button data-bg-color="#03a9f4" class="btn-light-blue">light blue</button>
        <button data-bg-color="#00bcd4" class="btn-cyan">cyan</button>
        <button data-bg-color="#009688" class="btn-teal">teal</button>
        <button data-bg-color="#4caf50" class="btn-green">green</button>
        <button data-bg-color="#8bc34a" class="btn-light-green">light green</button>
        <button data-bg-color="#cddc39" class="btn-lime">lime</button>
        <button data-bg-color="#ffeb3b" class="btn-yellow">yellow</button>
        <button data-bg-color="#ffc107" class="btn-amber">amber</button>
        <button data-bg-color="#ff9800" class="btn-orange">orange</button>
        <button data-bg-color="#ff5722" class="btn-deep-orange">deep orange</button>
        <button data-bg-color="#795548" class="btn-brown">brown</button>
        <button data-bg-color="#9e9e9e" class="btn-grey">grey</button>
        <button data-bg-color="#607d8b" class="btn-blue-grey">blue grey</button>
        <button data-bg-color="#000000" class="btn-black">black</button>
        <button data-bg-color="#ffffff" class="btn-white">white</button>
        <button data-bg-color="#f3f3f3" class="btn-default" style="padding: 10px 20px; font-size: 20px;  margin: 10px 20px; border: 2px solid #000">default</button>
        <button data-bg-color="#2e2e2e" class="btn-slate" style="padding: 10px 20px; font-size: 20px;  margin: 10px 20px; border: 2px solid #fff">slate</button>
    </div>
    <script>
        var buttons = document.querySelectorAll("button[data-bg-color]");
        buttons.forEach(function(button) {
          button.addEventListener("click", function() {
            var bgColor = this.getAttribute("data-bg-color");
            document.body.style.backgroundColor = bgColor;
          });
        });
    </script>