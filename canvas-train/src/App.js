import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    console.log('canvas:',canvas);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    
    ctx.strokeRect(0,0,500,500);
  });
  

  return (
    <div className="App">
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>
  );
}

export default App;
