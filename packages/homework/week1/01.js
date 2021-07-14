// 题目：进制转换，将 10 进制浮点数转换成 64 进制。

const union = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@';

function transform10to64(num) {
  let temp = '';
  const str = union.substr(0, 64);
  while (+num !== 0) {
    const yu = num % 64;
    temp = str.charAt(yu) + temp;
    num = (num - yu) / 64;
  }
  return temp;
}

function transform64to10(num) {
  var str = union.substr(0, 64);

  let temp = 0;
  let start = 1;
  for (let x = num.length - 1; x > -1; x--) {
    temp += start * str.indexOf(num.charAt(x));
    start *= 64;
  }
  return temp;
}

console.log(transform10to64(19941212)); // 1c4ts
console.log(transform64to10('1c4ts')); // 19941212
