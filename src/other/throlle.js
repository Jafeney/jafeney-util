/**
 * @desc 函数节流（每隔一段时间，只执行一次函数）
 * @param {*} fn 
 * @param {*} delay 
 */
export function throlle(fn, delay) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  }
}

// test
throlle((a) => { console.log(a) }, 1000)('11111')