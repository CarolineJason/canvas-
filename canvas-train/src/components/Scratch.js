import React, { Component, useEffect } from 'react'

function Scratch() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 50;
    draw(ctx, canvas);
  }, []);

  const draw = (ctx, canvas) => {
    ctx.save();
    ctx.fillStyle = 'rgb(100,100,100)';
    drawStroke(ctx, canvas);
    ctx.fillRect(0, 0, 100, 50);
    ctx.restore();
  }

  // pc 端
  // const drawStroke = (ctx, canvas) => {
  //   canvas.onmousedown = (e) => {
  //     let downX = e.offsetX;
  //     let downY = e.offsetY;
  //     ctx.beginPath();
  //     ctx.globalCompositeOperation = 'destination-out';
  //     ctx.lineWidth = 10;
  //     ctx.moveTo(downX, downY);
  //   }

  //   canvas.onmousemove = (e) => {
  //     let x = e.offsetX;
  //     let y = e.offsetY;
  //     ctx.lineTo(x,y);
  //     ctx.stroke();
  //   }

  //   canvas.onmouseup = () => {
  //     canvas.onmousemove = null;
  //   }
  // }

  return (
    <div style={{ width: '100px', height: '50px', border: '1px solid #ccc', margin: '0 auto', background: '#fff', position: 'relative'}}>
      <p
        style={{ lineHeight: '25px', textAlign: 'center', fontSize: '14px', color: 'red', height: '25px', width: '100px' }}>
        100元奖励券
      </p>
      <canvas id="canvas" style={{ position: 'absolute', top: '0', left: '0' }}></canvas>
    </div>
  )
}

export default Scratch;
