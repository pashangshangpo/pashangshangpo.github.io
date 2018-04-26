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
>>>>>>> f09cb88c9eaff927f4c04db04748c77b8f0119e0
>>>>>>> 63b54293c587ea95b88e4bbe2c46cc2f94f0a37f
>>>>>>> d72e47f8952e49d0bf4c45839779f4ab3b0b09d5
>>>>>>> b22860e0598311e5634df12c643221332aefc2ef
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
=======
};

// 优化展示效果, 部分内容不需要在移动端显示
if (isMobile()) {
  const elements = document.querySelectorAll('[data-pc]');
  for (let el of elements) {
    el.parentNode.removeChild(el);
>>>>>>> bab7e6332095ad4b03ae9f3a6ad15558b38a9021
>>>>>>> f09cb88c9eaff927f4c04db04748c77b8f0119e0
>>>>>>> 63b54293c587ea95b88e4bbe2c46cc2f94f0a37f
>>>>>>> d72e47f8952e49d0bf4c45839779f4ab3b0b09d5
>>>>>>> b22860e0598311e5634df12c643221332aefc2ef
  }
}