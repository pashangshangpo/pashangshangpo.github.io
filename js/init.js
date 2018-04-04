/**
 * 初始化
 */

const isMobile = () => {
 return navigator.userAgent.toLowerCase().indexOf('mobile') > -1
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f09cb88c9eaff927f4c04db04748c77b8f0119e0
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
>>>>>>> bab7e6332095ad4b03ae9f3a6ad15558b38a9021
>>>>>>> f09cb88c9eaff927f4c04db04748c77b8f0119e0
  }
}