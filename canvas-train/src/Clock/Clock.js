import React, {
  PureComponent
} from 'react';
import digit from './digit';

const WINDOW_WIDTH = 1200; // 画布 宽度
const WINDOW_HEIGHT = 768; // 画布 高度
const R = 8; // 球的半径
const MARGIN_TOP = 60;
const MARGIN_LEFT = 30;
let endTime = new Date();
endTime.setTime(endTime.getTime() + 3600 * 1000);
var curShowTimeSeconds = 0;

class Clock extends PureComponent {
  componentDidMount() {
    this.init();
  }

  init = () => {
    // setInterval(() => {
    //   this.renderCLock(ctx);
    // }, 1000);
    window.requestAnimationFrame(this.renderCLock);
  }


  renderDigit = (x, y, num, ctx) => {
    ctx.fillStyle = "rgb(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
      for (var j = 0; j < digit[num][i].length; j++) {
        if (digit[num][i][j] === 1) {
          ctx.beginPath();
          ctx.arc(x + j * 2 * (R + 1) + (R + 1), y + i * 2 * (R + 1) + (R + 1), R, 0, Math.PI * 2, false);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }

  getCurrentShowTimeSeconds = () => {
    const curTime = new Date();

    // 倒计时
    // let ret = endTime.getTime() - curTime.getTime();
    // ret = Math.round(ret / 1000);
    // return ret > 0 ? ret : 0;

    // 时钟
    let ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();
    return ret;
  }

  renderCLock = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    curShowTimeSeconds = this.getCurrentShowTimeSeconds();
    var hours = parseInt(curShowTimeSeconds / 3600); // 获取 小时
    var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60); // 获取分钟
    var seconds = parseInt(curShowTimeSeconds % 60); // 获取 秒

    this.renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), ctx); // 绘制 小时 的 十位 数字
    this.renderDigit(MARGIN_LEFT + 15 * (R + 1), MARGIN_TOP, parseInt(hours % 10), ctx); // 绘制 小时 的 个位 数字
    this.renderDigit(MARGIN_LEFT + 30 * (R + 1), MARGIN_TOP, 10, ctx); // 绘制 :
    this.renderDigit(MARGIN_LEFT + 40 * (R + 1), MARGIN_TOP, parseInt(minutes / 10), ctx); // 绘制 分钟 的 十位数
    this.renderDigit(MARGIN_LEFT + 55 * (R + 1), MARGIN_TOP, parseInt(minutes % 10), ctx); // 绘制 分钟 的 个位数
    this.renderDigit(MARGIN_LEFT + 70 * (R + 1), MARGIN_TOP, 10, ctx); // 绘制 :
    this.renderDigit(MARGIN_LEFT + 80 * (R + 1), MARGIN_TOP, parseInt(seconds / 10), ctx); // 绘制 秒 的 十位数
    this.renderDigit(MARGIN_LEFT + 95 * (R + 1), MARGIN_TOP, parseInt(seconds % 10), ctx); // 绘制 秒 的 个位数

    window.requestAnimationFrame(this.renderCLock);
  }

  render() {
    return (
      <div>
        <canvas id="canvas" height={WINDOW_HEIGHT} width={WINDOW_WIDTH}></canvas>
      </div>
    );
  }
}

export default Clock;