/**
 * @desc 函数防抖（在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时）
 * @param {*} fn 
 * @param {*} delay 
*/
export function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}