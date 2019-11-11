import React, { useEffect } from 'react';

function CanvasApi() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    console.log('canvas:', canvas);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';

    ctx.strokeRect(0, 0, 500, 500);

    ctx.beginPath(); // 开始 绘制 新的路径， 开始新的上下文绘制路线
    ctx.moveTo(20, 200);
    ctx.lineTo(20, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(20, 20);
    ctx.closePath();
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = '3';
    ctx.fillStyle = 'red';
    ctx.fill(); // 先 填充 再 描边， 这样 描边的线条 就不会 被填充的 颜色 所遮盖
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 350);
    ctx.lineTo(260, 260);
    ctx.lineTo(480, 260);
    ctx.closePath();
    ctx.strokeStyle = 'orangered';
    ctx.stroke();

  });
  return (
    <div>
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>
  )
}

export default CanvasApi;
