import React, { useEffect } from 'react';


function CreateBackgroundCanvasTrain () {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;


    // 画 单个的星星
    ctx.save();
    ctx.beginPath();
    ctx.translate(50,50);
    ctx.scale(50,50);
    for (let i = 0; i< 5; i++) {
      ctx.lineTo(
        Math.cos((18+i*72)/180*Math.PI),
        -Math.sin((18+i*72)/180*Math.PI)
      );
      ctx.lineTo(
        Math.cos((54+i*72)/180*Math.PI)*0.5,
        -Math.sin((54+i*72)/180*Math.PI)*0.5
      );
    }
    ctx.closePath();
    ctx.fillStyle = '#fb3';
    ctx.fill();
    ctx.restore();

    // 使用 createPattern(canvas, 'repeat') 创建 循环画布

    // const bgCanvas = createCanvasBg();
    // var pattern = ctx.createPattern(bgCanvas, 'repeat');
    // ctx.fillStyle = pattern;
    // ctx.fillRect(0, 0, 800, 800);

  }, []);

  const createCanvasBg = () => {
    const canvasDom = document.createElement('canvas');
    const canvasBgCtx = canvasDom.getContext('2d');
    canvasDom.width = 100;
    canvasDom.height = 100;

    // 画 单个的星星
    canvasBgCtx.save();
    canvasBgCtx.beginPath();
    canvasBgCtx.translate(50,50);
    canvasBgCtx.scale(50,50);
    for (let i = 0; i< 5; i++) {
      canvasBgCtx.lineTo(
        Math.cos((18+i*72)/180*Math.PI),
        -Math.sin((18+i*72)/180*Math.PI)
      );
      canvasBgCtx.lineTo(
        Math.cos((54+i*72)/180*Math.PI)*0.5,
        -Math.sin((54+i*72)/180*Math.PI)*0.5
      );
    }
    canvasBgCtx.closePath();
    canvasBgCtx.fillStyle = '#fb3';
    canvasBgCtx.fill();
    canvasBgCtx.restore();

    return canvasDom;
  }

  return (
    <div>
      <canvas id="canvas" style={{ display: 'block', margin: '0 auto', border: '1px solid #ccc' }}>
        浏览器不支持 canvas
      </canvas>
    </div>
  )
}

export default CreateBackgroundCanvasTrain;


