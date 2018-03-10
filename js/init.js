/**
 * 初始化
 */

const isMobile = () => {
 return navigator.userAgent.toLowerCase().indexOf('mobile') > -1
<<<<<<< HEAD
}

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]')
  for (let el of elements) {
    el.parentNode.removeChild(el)
=======
};

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]');
  for (let el of elements) {
    el.parentNode.removeChild(el);
>>>>>>> c69c06f87258af2b4cf1e5370f8e7df5f6da985a
  }
}