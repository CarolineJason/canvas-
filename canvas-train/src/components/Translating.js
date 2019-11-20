import React, { useEffect } from 'react';


function Translating() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    for( var i = 0; i < 3; i++ ) {
      for ( var j = 0; j < 3; j++ ) {
        ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 *i }, 255)`;
        ctx.translate(10 + j * 50, 10 + i * 50); // 每次 移动 坐标 原点
        ctx.fillRect(0, 0, 25, 25);
        
        ctx.restore();
      }
    }
  }, []);

  return (
    <div>
      <canvas id="canvas" width="400" height="400"></canvas>
    </div>
  );
}

export default Translating;
