import React, { useEffect } from 'react';

function Scaling() {
  useEffect(()=> {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.translate(150,100);
    ctx.scale(-1,2); // 负数 表示 沿着 对应的 轴 反转。
    ctx.font = '20px serif';
    ctx.fillText('hello world', 20, 20);
    ctx.fillRect(1,10,10,10);
    ctx.save();
  });

  return (
    <div>
      <canvas width="800" height="800" id="canvas"></canvas>
    </div>
  )
}

export default Scaling;
