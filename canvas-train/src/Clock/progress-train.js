import React, { Component } from 'react'
var percent = 0;
var textSpeed = 1;
var result = 0;
export default class ProgressTrain extends Component {
  state = {
    per: 0,
  };
  componentDidMount() {
    // 第一种方法 ：
    // this.fetPer();
    // this.drawProgress(percent);

    // 第二种 方法:
    this.init();
  }

  fetPer = () => {
    fetch('http://localhost:8090/posts')
      .then((res) => {return res.json()})
      .then((data) => {
        this.setState({
          per: data[0].per + Math.ceil(Math.random() * 10 + 10),
        });
      })
  }

  fetPro = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8090/posts')
        .then((res) => {
          resolve(res.json());
        })
    })
  }

  init = async () => {
    result = await this.fetPro();
    result = result[0].per;
    console.log('result:', result);
    this.drawProgress();
  }

  drawProgress = () => {
    window.requestAnimationFrame(this.drawProgress);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    
    this.drawWrapper(ctx, canvas);
    this.drawProgressBar(ctx, canvas, percent);
    this.drawInnerWrapper(ctx, canvas);
    this.drawInnerCircle(ctx, canvas);
    this.drawText(ctx, canvas, percent);
    this.drawSubText(ctx, canvas);

    // if (percent >= this.state.per) {  // 数据 存在 state 中
    //   return false;
    // } 

    if (percent >= result) { // async await 改写
      return false;
    } 
    percent = textSpeed ++;
  }

  // 外圈 圆弧
  drawWrapper = (ctx, canvas) => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#2d4264';
    ctx.lineCap = 'round';
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.arc(0, 0, 200, 0.75*Math.PI, 2.25*Math.PI);
    ctx.stroke();
    ctx.restore();
  }

  // 进度条 圆弧
  drawProgressBar = (ctx, canvas, percent) => {
    if (percent < 0) {
      return false;
    }
    const deg = (2.25*Math.PI - 0.75*Math.PI)/100 * percent;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#fb3';
    ctx.lineCap = 'round';
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.arc(0,0,200, 0.75*Math.PI, 0.75*Math.PI + deg);
    ctx.stroke();
    ctx.restore();
  }

  // 内圈 外边
  drawInnerWrapper = (ctx, canvas) => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#2d4264';
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.arc(0,0, 150, 0, 2*Math.PI);
    ctx.stroke();
    ctx.restore();
  }

  // 获取 填充圆 左右的2个点坐标
  getLinearPoint = () => {
    const canvas = document.getElementById('canvas');
    var start = (canvas.height / 2) - (150 - (15 / 2));
    var end = canvas.height / 2 + 150 - (15/2);
    return {start, end};
  }

  // 内圈 整圆 
  drawInnerCircle = (ctx, canvas) => {
    ctx.save();
    ctx.beginPath();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    var grad = ctx.createLinearGradient(0, -this.getLinearPoint().start, 0, this.getLinearPoint().end);
    grad.addColorStop(0, '#39a8ce');
    grad.addColorStop(1, '#5647c9');
    ctx.fillStyle = grad;
    ctx.arc(0, 0, 142.5, 0 ,2*Math.PI);
    ctx.fill();
    ctx.restore();
  }

  // 文字
  drawText = (ctx, canvas, percent) => {
    ctx.save();
    ctx.beginPath();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.font = '48px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillText(`${percent}%`, 0, -40);
    ctx.closePath();
    ctx.restore();
  }

  // 副标题 文字
  drawSubText = (ctx, canvas) => {
    ctx.save();
    ctx.beginPath();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.font = '20px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillText('在线率', 0, 20);
    ctx.closePath();
    ctx.restore();
  }
  render() {
    return (
      <div>
        <canvas id="canvas" style={{ display: 'block', border: '1px solid #ccc' }}></canvas>
      </div>
    )
  }
}
