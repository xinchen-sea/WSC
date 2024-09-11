// 定义要展示的文本
const textArray = ["欢迎来到尘心的个人空间！", "天下事，无非是戏；世上人，何必认真"];
let textIndex = 0; // 当前显示的文本索引
let charIndex = 0; // 当前打出的字符索引
let isDeleting = false; // 是否正在删除文字
let typingSpeed = 150; // 打字速度（毫秒）
let deletingSpeed = 100; // 删除速度（毫秒）
let delayBetweenTexts = 2000; // 文字打完后等待的时间

// 获取显示打字机文字的元素
const typewriterText = document.getElementById("typewriter-text");

function typeText() {
  const currentText = textArray[textIndex]; // 获取当前的文字

  if (isDeleting) {
    // 删除文字的效果
    typewriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--; // 减少字符

    // 当删除完成后，切换到下一个文本
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length; // 切换到下一个文本
    }
  } else {
    // 打字效果
    typewriterText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++; // 增加字符

    // 当打字完成后，等待一段时间再删除
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(() => typeText(), delayBetweenTexts); // 等待一段时间再删除
      return;
    }
  }

  // 根据当前状态（打字或删除）设置定时器
  setTimeout(() => typeText(), isDeleting ? deletingSpeed : typingSpeed);
}

// 启动打字机效果
window.addEventListener('load', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const mainContent = document.querySelector('.main-content');
  const transitionOverlay = document.querySelector('.transition-overlay');

  // 模拟加载效果，2秒后执行切换效果
  setTimeout(() => {
    transitionOverlay.style.transform = 'scaleX(1)'; // 展开效果
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      transitionOverlay.style.transform = 'scaleX(0)'; // 收缩效果
      setTimeout(() => {
        mainContent.style.display = 'flex'; // 显示主页内容
        typeText(); // 开始打字机效果
      }, 1000); // 等待切换效果完成后显示主页内容
    }, 1000); // 切换效果持续时间
  }, 2000); // 设置加载界面显示的时间
});

// script.js
document.getElementById('myButton').addEventListener('click', function() {
    alert('点击前往那个');
});