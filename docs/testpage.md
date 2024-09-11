---
tags:
  - HTML5
  - JavaScript
  - CSS
---


这一页面用来测试笨人的一些代码效果，包括但不限于css



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