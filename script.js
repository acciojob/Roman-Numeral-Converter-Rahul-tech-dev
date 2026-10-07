function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

 
  const table = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let result = '';
  for (const [value, symbol] of table) {
    const count = Math.floor(num / value);
    if (count > 0) {
      result += symbol.repeat(count);
      num -= value * count;
    }
  }
  return result;
}

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
