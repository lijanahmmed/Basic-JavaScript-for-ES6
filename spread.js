const max = Math.max(34, 56, 12, 54, 33);
console.log(max)

const array = [34, 56, 60, 12, 54, 33];
const getMax = Math.max(...array);
console.log(getMax)

const numberArray = [34, 56, 12, 54, 33];
const number = numberArray;
numberArray.push(65)
number.push(60)

const num = [...number]
number.push(99)
num.push(71)

console.log(numberArray, number, num)
