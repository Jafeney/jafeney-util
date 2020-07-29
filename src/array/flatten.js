/**
 * @desc 多维数组扁平化
 * @param {*} arr 
 */
export function flatten(arr) {
  const res = []
  function handler(item) {
    if (Array.isArray(item)) {
      for (x of item) {
        handler(x)
      }
    } else {
      res.push(item)
    }
  }
  handler(arr)
  return res
}

// print
flatten([1, [2, 3, [4, 5]]])