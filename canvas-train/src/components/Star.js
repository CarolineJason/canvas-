import React, { Component } from 'react';

class Star extends Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 700;

    // 添加渐变
    const skyStyle = ctx.createLinearGradient(0,0,0, document.getElementById('canvas').height);
    skyStyle.addColorStop(0.0, '#000');
    skyStyle.addColorStop(1.0, '#035');
    ctx.fillStyle = skyStyle;


    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // this.startStar(ctx, 300, 150, 400, 400, 30);
    // R: 大圆 半径
    // r: 小圆半径
    // x: x轴偏移量
    // y: y轴偏移量

    // 画 多个星星
    for ( let i = 0; i < 200; i++) {
      var R = Math.random() * 5 + 5;
      var r = R / 2;
      var x = Math.random() * canvas.width;
      var y =Math.random() * canvas.height * 0.65;
      var roa = Math.random() * 360;

      this.startStar(ctx, R, r, x, y, roa);
    }
  };

  startStar = (ctx, R, r, x, y, roa) => {

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    for(let i = 0; i<5; i++) {
        ctx.lineTo(
          Math.cos((18 + i * 72) / 180 * Math.PI - roa) * R + x,
          -Math.sin((18 + i * 72)/ 180 * Math.PI - roa) * R + y
        );
        ctx.lineTo(
          Math.cos((54 + i * 72) / 180 * Math.PI - roa) * r + x,
          -Math.sin((54 + i * 72)/ 180 * Math.PI - roa) * r + y
        );
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
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


export default Star;
