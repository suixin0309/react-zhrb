(function () {
  'use strict';
  //获取设备宽度 并计算其与UI界面的比例并将其设置到html的style中作为rem值
  var screenWidth;
  var html = document.getElementsByTagName("html")[0];
  if (window.innerWidth) {//标准浏览器的写法
    screenWidth = window.innerWidth;
  }
  else if ((document.body) && (document.body.clientWidth)) {//非标准浏览器ie10以下
    screenWidth = document.body.clientWidth;
  }
  console.log(screenWidth)
  html.style.fontSize = screenWidth / 37.5 + "px"; //假设设计图上元素为18px的字体大小，那么计算得到是18/50 = .36rem
})();
