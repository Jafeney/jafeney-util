/**
 * @desc 实现2个超大数相乘 （超大数指超过语言支持的数字的最大表示范围）
 * @param {*} num1 
 * @param {*} num2 
 */
export function bigMul(num1, num2) {
  const a = String(num1)
  const b = String(num2)
  let len = a.length + b.length;
  let arr = new Array(len);
  arr.fill(0); // 为了进行加法运算需要先初始化为0
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {  // 倒序，从个位开始计算
      let mul = a[i] * b[j] + arr[i + j + 1];
      arr[i + j] += Math.floor(mul / 10);
      arr[i + j + 1] = mul % 10;
    }
  }
  return (arr.join("").replace(/^0+/, '')); // 去掉首位0
}

// Test
bigMul(123456789010121314, 1211132123)