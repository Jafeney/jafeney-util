/**
 * @desc 平滑滚动至顶部
 * @param {number} duration 滚动时间
 */
export function smoothlyScrollTop(duration) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = callback => setTimeout(callback, 17)
  }
  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 滚动step方法
  function step() {
    // 目标滚动位置
    scrollTop = scrollTop - scrollTop / (duration / 1000);
    if (Math.abs(scrollTop) < 1) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scrollTop);
      requestAnimationFrame(step);
    }
  };
  step();
}

// test
smoothlyScrollTop(5000)