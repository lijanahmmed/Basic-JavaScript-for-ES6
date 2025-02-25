const student = {
    name: 'Lijan',
    age: 21,
    phone: '01779954212',
    money: 1000
}
const getName = student.name
const getAge = student.age
const getPhone = student.phone
const getMoney = student.money
console.log(getName, getAge, getPhone, getMoney)
// Lijan 21 01779954212 1000

const {name, age, phone, money} = student;
console.log(name, age, money, phone);
// Lijan 21 1000 01779954212

function doubleThem(a, b){
    return[a*2, b*2];
}
const [x, y] = doubleThem(3, 4);
console.log(x, y)
// 6 8

