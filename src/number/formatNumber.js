
/**
 * @desc 数字格式化输出
 * @param {*} num 
 */
export function formatNumber(num) {
  let i = 0
  let res = ''
  for (x of String(num)) {
    if (i > 0 && i % 3 === 0) {
      res += ','
    }
    res += x
    i += 1
  }
  return res
}

// test
formatNumber(999999999)