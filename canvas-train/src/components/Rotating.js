import React, { useEffect } from 'react';


function Rotating() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.translate(200,200);

    for(var i = 1; i < 10; i++) {  // i 控制 圆 的层数
      // ctx.save();
      ctx.fillStyle = `rgb(${51*i}, ${255-51*i}, 255)`;
      for (var j = 0; j < i * 5; j++) { // j 控制 每一层 有多少个圆
        ctx.rotate(Math.PI * 2 / (i * 5)); // 设置 旋转角度
        ctx.beginPath();
        ctx.arc(0, i*12.5, 5, 0, 2*Math.PI, true);
        ctx.fill();
      }
      ctx.save();
      ctx.restore();
    }


  }, []);

  return (
    <div>
      <canvas id="canvas" width="400" height="400"></canvas>
    </div>
  );
}

export default Rotating;
