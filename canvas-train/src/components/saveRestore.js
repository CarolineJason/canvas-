import React, { useEffect } from 'react';



function SaveRestore() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');
    ctx.fillRect(0,0,150,150);
    ctx.save(); // 保存 当前的 默认 #000 颜色状态

    ctx.fillStyle = '#09f';
    ctx.fillRect(15,15,120,120);
    ctx.save(); // 保存 当前的 #09f 颜色状态

    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.6;
    ctx.fillRect(30,30,90,90);

    ctx.restore();  // 这里restore() 表示 用上一次的颜色 #09f 状态
    ctx.fillRect(45,45,60,60);

    ctx.restore(); // // 这里restore() 表示 用上一次的颜色 #000 状态
    ctx.fillRect(60,60,30,30);

  });

  return (
    <div>
      <canvas id="canvas" height="180" width="180" border="1px solid #ccc" border-radius="6px"></canvas>
    </div>
  )
}

export default SaveRestore;
