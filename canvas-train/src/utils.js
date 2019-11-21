const tool = {};

tool.captureMouse = function (element, mousedown, mousemove, mouseup) {

  /*传入Event对象*/
  function getPoint(event) {
    event = event || window.event; /*为了兼容IE*/
    /*将当前的鼠标坐标值减去元素的偏移位置，返回鼠标相对于element的坐标值*/
    var x = (event.pageX || event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
    x -= element.offsetLeft;
    var y = (event.pageY || event.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    y -= element.offsetTop;
    return {
      x: x,
      y: y
    };
  };

  if (!element) return;

  /*为element元素绑定mousedown事件*/
  element.addEventListener('mousedown', function (event) {
    event.point = getPoint(event);
    mousedown && mousedown.call(this, event);
  }, false);

  /*为element元素绑定mousemove事件*/
  element.addEventListener('mousemove', function (event) {
    event.point = getPoint(event);
    mousemove && mousemove.call(this, event);
  }, false);

  /*为element元素绑定mouseup事件*/
  element.addEventListener('mouseup', function (event) {
    event.point = getPoint(event);
    mouseup && mouseup.call(this, event);
  }, false);
};

export default tool;