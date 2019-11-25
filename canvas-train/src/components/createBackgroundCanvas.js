import React, { Component } from 'react'

// 用另外 一个 画布 来做背景 ， 通过 ctx.createPattern(backgroundCanvas, 'repeat') 循环排列画布

export default class CreateBackgroundCanvas extends Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;

    const backgroundCanvas = this.createCanBg();
    var pattern = ctx.createPattern(backgroundCanvas, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 800, 800);
  }

  createCanBg = () => {
    const bgCanvas = document.createElement('canvas');
    var bgContext = bgCanvas.getContext('2d');
    bgCanvas.width = 100;
    bgCanvas.height = 100;

    this.drawStar(bgContext, 50, 50, 25, 0);
    return bgCanvas;
  }

  drawStar = (ctx, x, y, R, rot) =>  {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot/180*Math.PI); // 旋转 角度
    ctx.scale(R, R); // 缩放
    this.starPath(ctx);
    ctx.fillStyle = '#fb3';
    ctx.fill();
    ctx.restore();
  }

  starPath = (ctx) => {
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos((18+i*72)/180*Math.PI),
          -Math.sin((18+i*72)/180*Math.PI)
        );
        ctx.lineTo(
          Math.cos((54+i*72)/180*Math.PI)*0.5,
          -Math.sin((54+i*72)/180*Math.PI)*0.5
        );
    }
    ctx.closePath();
  }

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          style={{ display: 'block', margin: '0 auto', border: '1px solid #ccc' }}
        >
          该浏览器不支持 canvas
        </canvas>
      </div>
    )
  }
}
