import React, { useEffect } from 'react';

function DrawArc() {
  useEffect(() => {
    const canvas = document.getElementById('drawArc');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '2';
    ctx.fillStyle = 'red';
    ctx.arc(100, 100, 50,0, Math.PI * 1.5, false);
    ctx.fill();
    ctx.stroke();

  });

  return (
    <div>
      <canvas id="drawArc" height="400" width="400"></canvas>
    </div>
  )
}

export default DrawArc;
