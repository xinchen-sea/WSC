/* 全局样式 */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('bizhi.png') no-repeat center center fixed;
  background-size: cover;
}

/* 加载界面样式 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2c3e50; /* 纯色背景 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* 方块容器，确保方块叠在一起 */
.square-container {
  position: relative;
  width: 100px; /* 容器的宽度，可以根据需要调整 */
  height: 100px; /* 容器的高度，可以根据需要调整 */
}

.square {
  width: 100px;
  height: 100px;
  background-image: url('loading.png'); /* 设置背景图像 */
  background-size: cover; /* 确保图像覆盖整个元素 */
  background-position: center; /* 图像居中显示 */
  background-repeat: no-repeat; /* 防止图像重复 */
  /* 旋转动画 */
  animation: rotate 4s linear infinite;
}

/* 旋转动画 */
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 主页内容隐藏 */
.main-content {
  display: none;
}

/* 打字机效果 */
.typewriter-container {
  text-align: center;
}

#typewriter-text {
  font-size: 2rem;
  color: white;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
}

/* 切换效果覆盖层 */
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2c3e50; /* 切换效果背景色 */
  transform: scaleX(1);
  transform-origin: center;
  transition: transform 1s ease-in-out;
  z-index: 0;
}
