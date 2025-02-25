const a = 15;
const b = 6;

const sum = 'The' + ' ' + 'sum' + ' ' + 'of' + ' ' + 'a' + ' ' + 'and' + ' ' + 'b' + ' ' + 'is' + ' ' + (a+b)
const text = 'My' + ' ' + 'name' + ' ' + 'is' + ' ' + 'Lijan \n' +
'My' + ' ' +'age' + ' ' + 'is' + ' ' + (a+b)

console.log(sum)
// The sum of a and b is 21
console.log(text)
// My name is Lijan 
// My age is 21

const math = `The sum of ${a} and ${b} is ${a+b}
And my age is ${a+b}`
console.log(math)
// The sum of 15 and 6 is 21
// And my age is 21