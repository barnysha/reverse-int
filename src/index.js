module.exports = function reverse (n) {
    // разбор, длинно-понятно
    // let str=String(n);
    // let arr = str.split('');
    // let revArr = arr.reverse();
    // let newStr = revArr.join('');
    // let result = parseInt(newStr);
// коротко
  return parseInt(String(n).split('').reverse().join(''));
}
