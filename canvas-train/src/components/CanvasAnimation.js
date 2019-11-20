import React, { Component } from 'react';

var sun = new Image();
var moon = new Image();
var earth = new Image();

class CanvasAnimation extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(this.draw);

    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
  }

  draw = () => {
    var ctx = document.getElementById('canvas').getContext('2d');
  
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,400,400); // 每次 执行 draw() 先清除 画布
  
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(200,200);
  
    // Earth
    var time = new Date();
    ctx.rotate(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(105,0);
    ctx.fillRect(0,-12,50,24); // Shadow
    ctx.drawImage(earth,-12,-12); // 地球 直径 24
  
    // Moon
    ctx.save();
    ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());
    ctx.translate(0,28.5);
    ctx.drawImage(moon,-3.5,-3.5); // 月亮 直径 7
    ctx.restore();
  
    ctx.restore();
    
    // 地球 路径
    ctx.beginPath();
    ctx.arc(200,200,105,0,Math.PI*2,false);
    ctx.stroke();
   
    ctx.drawImage(sun,0,0,400,400);
  
    window.requestAnimationFrame(this.draw);
  }

  render() {
    return (
      <div>
        <canvas id="canvas" height="800" width="800"></canvas>
      </div>
    );
  }
}

export default CanvasAnimation;