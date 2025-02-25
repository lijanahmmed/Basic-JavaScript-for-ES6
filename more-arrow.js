const getAge = (person) => person.age;
const student = { name: 'Lijan', age: 21}
const age = getAge(student)
console.log(age)
// 21

const numberArray = numbers => numbers[2];
const array = numberArray([2, 3, 4, 6, 7]);
console.log(array)
// 4

const doubleIt = num => num * 2;
const number = 24;
console.log(doubleIt(number))
// 48

const getPI = () => Math.PI
console.log(getPI())
// 3.141592653589793

const doMath = (x , y, z) => {
    const sum = x + y + z;
    const multiple = x * y * z;
    return sum + multiple;
}
console.log(doMath(5, 2, 9))
// 106