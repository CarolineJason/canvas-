import React, { Component } from 'react';

class Progress extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    this.drawBg(ctx, canvas);
    this.drawCircleLay(ctx, canvas);
    this.drawCenterCircle(ctx, canvas);
    this.drawCenterBorderCircle(ctx, canvas);
    this.drawCenterText(ctx, canvas);
    this.drawSecondText(ctx, canvas);
  }

  // 绘制 背景
  drawBg = (ctx, canvas) => {
    ctx.beginPath();
    ctx.strokeStyle = '#2d4264';
    ctx.lineWidth = 10;
    ctx.lineGap = 'round';
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, Math.PI * 0.75, Math.PI * 2.25);
    ctx.stroke();
  }

  linearLocation(){
    const canvas = document.getElementById('canvas');
    // 设定渐变背影的起始结束点
    let start = (canvas.height / 2) - ((100-15)*2 + 10) / 2;
    let end = start + (100-15)*2 + 10;
    console.log(start, end);
    return {start,end};
  }

  // 绘制 进度条
  drawCircleLay = (ctx, canvas) => {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, this.linearLocation().start, 0, this.linearLocation().end);
    grd.addColorStop(0, '#0f6cd9');
    grd.addColorStop(1, '#05a6da');
    ctx.strokeStyle = grd;
    ctx.lineCap = 'round';
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, Math.PI*0.75, Math.PI*2.25, false);
    ctx.stroke();
  }

  // 填充圆
  drawCenterCircle = (ctx, canvas) => {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, this.linearLocation().start, 0, this.linearLocation().end);
    grd.addColorStop(0, '#39a8ce');
    grd.addColorStop(1, '#5647c9');
    ctx.fillStyle = grd;
    ctx.arc(canvas.width / 2, canvas.height / 2, 85, 0, Math.PI*2, false);
    ctx.fill();
  }

  // 填充圆 修饰 描边 
  drawCenterBorderCircle = (ctx, canvas) => {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,0,.3)';
    ctx.lineWidth = 10;
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI*2, false);
    ctx.stroke();
  }

  // 绘制 中心文字
  drawCenterText = (ctx, canvas) => {
    ctx.beginPath();
    ctx.font = '32px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#192f47';
    ctx.fillText('100%', canvas.width / 2, canvas.height / 2);
    ctx.stroke();
  }

  // 绘制 二级文字
  drawSecondText = (ctx, canvas) => {
    ctx.beginPath();
    ctx.font = '14px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#192f47';
    ctx.fillText('在线率', canvas.width / 2, canvas.height / 2 + 25);
    ctx.stroke();
  }
  
  

  render() {
    return (
      <div style={{ border: '1px solid #ccc' }}>
        <canvas id="canvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default Progress;