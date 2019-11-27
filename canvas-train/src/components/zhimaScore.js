import React, { Component } from 'react';

// function Dot() {
//   this.x = 0;
//   this.y = 0;
//   this.draw = function (ctx) {
//     ctx.save();
//     ctx.beginPath();
//     ctx.fillStyle = 'rgba(255, 255, 255, .7)';
//     ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
//     ctx.fill();
//     ctx.restore();
//   };
// }

// function text(process) {
//   ctx.save();
//   ctx.rotate(10 * deg0);
//   ctx.fillStyle = '#000';
//   ctx.font = '80px Microsoft YaHei';
//   ctx.textAlign = 'center';
//   ctx.textBaseLine = 'top';
//   ctx.fillText(process, 0, 10);
//   ctx.restore();
// }

export default class ZhiMaScore extends Component {
  componentDidMount() {
    this.init();
  }

  // init = () => {
  //   const canvas = document.getElementById('canvas');
  //   const ctx = canvas.getContext('2d');
  //   canvas.width = 600;
  //   canvas.height = 600;

  //   var score = canvas.attributes['data-score'].value;
  //   var stage = ['较差', '中等', '良好', '优秀', '极好'];
  //   var radius = 150;
  //   var deg0 = Math.PI / 9;
  //   var deg1 = Math.PI * 11 / 9 / 5;

  //   var dot = new Dot();
  //   var dotSpeed = 0.03;
  //   var textSpeed = Math.round(dotSpeed * 100 / deg1);
  //   var angle = 0;
  //   var credit = 400;

  //   if(score < 400 || score > 900) {
  //     alert('信用分数区间: 400 ~ 900');
  //     return false;
  //   }
    
  //   this.drawFrame(ctx, canvas);
  // }

  // drawFrame = (ctx, canvas) => {
  //   ctx.save();
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.translate(canvas.width / 2, canvas.height / 2);
  //   ctx.rotate(8 * deg0);

  //   dot.x = radius * Math.cos(angle);
  //   dot.y = radius * Math.sin(angle);

  //   var aim = (score - 400) * deg1 / 100;
  //   if (angle < aim) {
  //     angle += dotSpeed;
  //   }
  //   dot.draw(ctx);

  //   if (credit < score - textSpeed) {
  //     credit += textSpeed;
  //   } else if ( credit >= score - textSpeed && credit < score ) {
  //     credit += 1;
  //   }
  //   text(credit);
  // }

  render() {
    return (
      <div>
        <canvas id="canvas" style={{ display: 'block', border: '1px solid #ccc', background: '#0e83f5' }} data-score="800"></canvas>
      </div>
    )
  }
}
