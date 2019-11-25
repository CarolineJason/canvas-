import React, { Component } from 'react'

class SaveStore extends Component {
  componentDidMount() {
    this.init();
  }


  init = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;

    ctx.save(); // save() 表示 当前图形的状态 包括 设置的 所有状态
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.translate(100,100);
    ctx.fillRect(0,0,400,400);
    ctx.fill();
    ctx.closePath();
    ctx.restore(); // restore() 将返回 save 节点的所有状态。 不影响后续 的状态设置。

    ctx.save();
    ctx.beginPath();
    ctx.translate(300,300); // 加上了 ctx.save() 之后，上面的 ctx.translate(300,300); 就不会受到 上面的ctx.translate(100,100); 的影响， 这里的移动原点 还是相对于 最开始 的 0,0 位置。
    ctx.fillStyle = 'lime';
    ctx.fillRect(0,0,400,400);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          style={{ display: 'block', margin: '0 auto', border: '1px solid #ccc' }}></canvas>
      </div>
    )
  }
}

export default SaveStore;

