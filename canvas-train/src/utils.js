// 获取 当前 的时间
export const getCurrentShowTimeSeconds = () => {
  const curTime = new Date();
  let ret = endTime.getTime() - curTime.getTime();
  ret = Math.round(ret / 1000);
  return ret > 0 ? ret : 0; 
}