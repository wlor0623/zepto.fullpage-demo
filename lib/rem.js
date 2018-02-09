// 同时我们需要根据设计图来做相应的参数修改，代码中第7行中的750是默认设计图的宽度，后续只需修改此处即可。
// 规则，1rem = 100px，即某一元素的宽或高是100px,用本模板则只需写1rem，这样即可做到动态布局！
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      docEl.getElementsByTagName("body")[0].style.fontSize = docEl.style.fontSize;
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);