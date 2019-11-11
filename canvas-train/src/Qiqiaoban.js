import React, { useEffect } from 'react'


function Qiqiaoban() {
  const tangram = [
    {
      p: [
        { x: 0, y: 0 },
        { x: 800, y: 0 },
        {x: 400, y: 400},
      ],
      color: '#caff67',
    },
    {
      p: [
        { x: 0, y: 0 },
        { x: 400, y: 400 },
        { x: 0, y: 800 },
      ],
      color: '#67becf',
    },
    {
      p: [
        { x: 800, y: 0 },
        { x: 800, y: 400 },
        { x: 600, y: 600 },
        { x: 600, y: 200 },
      ],
      color: '#ef3d61',
    },
    {
      p: [
        { x: 600, y: 200 },
        { x: 800, y: 600 },
        { x: 400, y: 400 },
      ],
      color: '#f9f51a',
    },
    {
      p: [
        { x: 400, y: 400 },
        { x: 600, y: 600 },
        { x: 400, y: 800 },
        { x: 200, y: 600 },
      ],
      color: '#a594c0',
    },
    {
      p: [
        { x: 200, y: 600 },
        { x: 400, y: 800 },
        { x: 0, y: 800 },
      ],
      color: '#fa8ecc',
    },
    {
      p: [
        { x: 800, y: 400 },
        { x: 800, y: 800 },
        { x: 400, y: 800 },
      ],
      color: '#f6ca29',
    },
  ];

  const draw = (ctx, piece) => {
    console.log('piece', piece.p);
    ctx.beginPath();
    ctx.moveTo(piece.p[0].x, piece.p[0].y); 
    piece.p && piece.p.forEach((item, index) => {
      ctx.lineTo(item.x, item.y);
    })
    ctx.closePath();
    ctx.fillStyle = piece.color;
    ctx.fill();

  }

  useEffect(() => {
    const canvas = document.getElementById('Qiqiaoban');
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < tangram.length; i++) {
      draw(ctx, tangram[i]);
    }
  });

  return (
    <div>
      <canvas id="Qiqiaoban" width="800" height="800"></canvas>
    </div>
  )
}

export default Qiqiaoban;
