/**
 * 初始化
 */

const isMobile = () => {
 return navigator.userAgent.toLowerCase().indexOf('mobile') > -1
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 85e6b3a663d6702f89e9009c2718b66e4ac3f0cd
>>>>>>> 62eaa237275a530aee9e23247a954805dafb1e43
}

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]')
  for (let el of elements) {
    el.parentNode.removeChild(el)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
};

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]');
  for (let el of elements) {
    el.parentNode.removeChild(el);
>>>>>>> 0c6aaad6dde52c327b6371b933ea9d561c72b415
>>>>>>> 85e6b3a663d6702f89e9009c2718b66e4ac3f0cd
>>>>>>> 62eaa237275a530aee9e23247a954805dafb1e43
  }
}