const getAge = (person) => person.age;
const student = { name: 'Lijan', age: 21}
const age = getAge(student)
console.log(age)

const numberArray = numbers => numbers[2];
const array = numberArray([2, 3, 4, 6, 7]);
console.log(array)

const doubleIt = num => num * 2;
const number = 24;
console.log(doubleIt(number))

const getPI = () => Math.PI
console.log(getPI())

const doMath = (x , y, z) => {
    const sum = x + y + z;
    const multiple = x * y * z;
    return sum + multiple;
}

console.log(doMath(5, 2, 9))