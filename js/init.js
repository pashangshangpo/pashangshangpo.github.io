/**
 * 初始化
 */

const isMobile = () => {
 return navigator.userAgent.toLowerCase().indexOf('mobile') > -1
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cff089a83bac3164b6fc78f7ddd5dcb1c5c95b27
}

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]')
  for (let el of elements) {
    el.parentNode.removeChild(el)
<<<<<<< HEAD
=======
=======
};

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]');
  for (let el of elements) {
    el.parentNode.removeChild(el);
>>>>>>> 4918b126b00453789e3715d3b14bbd3d6f8d795d
>>>>>>> cff089a83bac3164b6fc78f7ddd5dcb1c5c95b27
  }
}