import React, { useEffect } from 'react';
import digit from './digit';

const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;

function Clock() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    renderCLock(ctx);
  });

  const renderDigit = (x, y, num, ctx) => {
    console.log(x, y,num, ctx);
    ctx.fillStyle = 'rgb(0, 102, 153)';
    for (var i = 0; i < digit[num].length; i++) {
      for (var j = 0; j< digit[num][i].length; j++) {
        if (digit[num][i][j] === 1) {
          ctx.beginPath();
          ctx.arc();
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }

  const renderCLock = (ctx) => {
    var hour = 12;
    var minutes = 24;
    var seconds = 36;
    renderDigit(0,0, parseInt(hour/10),ctx);
    
  }

  return (
    <div>
      <canvas id="canvas" height={WINDOW_HEIGHT} width={WINDOW_WIDTH}></canvas>
    </div>
  );
}

export default Clock;