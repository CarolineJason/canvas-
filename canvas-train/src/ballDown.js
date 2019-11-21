import React, { useEffect } from 'react';

const ball = { x: 100, y: 100, r: 20, g: 2, vx: 2, vy: 0, color: '#058' };
let flag = false;
function BallDown() {
  useEffect(() => {
    if (!flag) {
      init();
    }
  });

  useEffect(() => {
    setInterval(() => {
      ballInit();
    }, 60);
  });

  const renderBall = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  
  const updateBall = () => {
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;

    if (ball.y > (400 - ball.r)) {
      ball.y = (400 - ball.r);
      ball.vy = -ball.vy * 0.5
    }
  }

  const init = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(900, 0);
    ctx.lineTo(900, 700);
    ctx.lineTo(0, 700);
    ctx.closePath();
    ctx.stroke();
    flag = true;
  }

  const ballInit = () => {
      renderBall();
      updateBall();
  }

  return (
    <div>
      <canvas id="canvas" width="1000" height="1000"></canvas>
    </div>
  );
}

export default BallDown;