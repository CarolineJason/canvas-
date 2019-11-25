import React, { Component } from 'react'

export default class Moon extends Component {
  componentDidMount() {
    console.log((400 - 100)*this.dis(400,100,1200,400)/(1200 - 400));
    this.moon();
  }

  dis = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2)*(y1 - y2));
  }

  moon = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = 800;
    canvas.width = 800;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    ctx.arc(400,400,300, 0.5*Math.PI, 1.5* Math.PI, true);
    ctx.moveTo(400, 100);
    ctx.arcTo(1200, 400, 400, 700,(400 - 100)*this.dis(400,100,1200,400)/(1200 - 400));
    ctx.stroke();
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
