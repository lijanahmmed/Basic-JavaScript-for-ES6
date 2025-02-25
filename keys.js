const student = {
    name: 'Lijan',
    age: 21,
    phone: '01779954212',
    money: 1000,
    isMale: true
}
console.log(student);

const keys = Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values)

const entries = Object.entries(student)
console.log(entries)

delete student.money
console.log(student);
