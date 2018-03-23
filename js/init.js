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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 85e6b3a663d6702f89e9009c2718b66e4ac3f0cd
>>>>>>> 62eaa237275a530aee9e23247a954805dafb1e43
>>>>>>> d45c7796da1e0780333fa6f0e5af75ca01037299
>>>>>>> c947e726f8c3c64087080dd373b9de5afc885d71
>>>>>>> ff84fc99f2fd8940045ba19ee2574f58eba532c1
>>>>>>> d2a36c822c1120a9da29706c327ad91f921bfafb
>>>>>>> 250a6286798e1fcc2912f6fca5b2684169ba0487
>>>>>>> f602871775520d607454ca51ae8da50d38ec0309
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> d45c7796da1e0780333fa6f0e5af75ca01037299
>>>>>>> c947e726f8c3c64087080dd373b9de5afc885d71
>>>>>>> ff84fc99f2fd8940045ba19ee2574f58eba532c1
>>>>>>> d2a36c822c1120a9da29706c327ad91f921bfafb
>>>>>>> 250a6286798e1fcc2912f6fca5b2684169ba0487
>>>>>>> f602871775520d607454ca51ae8da50d38ec0309
  }
}