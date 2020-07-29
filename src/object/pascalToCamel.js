/**
 * @desc 对象的key 从横杠形式（Pascal）转换到小驼峰形式（Camel），支持层层嵌套
 * @param {*} obj 
 */
export function pascalToCamel(obj) {
  function handler(obj) {
    // 如果是对象（且非数组）
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      const temObj = {}
      for (x in obj) {
        if (x.indexOf('_') !== -1) {
          const tmp = x.split('_')
          const newKey = tmp.map((item, i) => {
            if (i === 0) {
              return item
            } else {
              return `${item[0].toUpperCase()}${item.slice(1)}`
            }
          }).join('')
          temObj[newKey] = handler(obj[x])
        } else {
          temObj[x] = handler(obj[x])
        }
      }
      return temObj
    } else {
      return obj
    }
  }
  return handler(obj)
}

// test
pascalToCamel({ "a_b": 1, "a_c": { "'a_d": 2 } })