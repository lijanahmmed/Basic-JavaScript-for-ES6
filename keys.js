const student = {
    name: 'Lijan',
    age: 21,
    phone: '01779954212',
    money: 1000,
    isMale: true
}
console.log(student);
// {
//     name: 'Lijan',
//     age: 21,
//     phone: '01779954212',
//     money: 1000,
//     isMale: true
// }

const keys = Object.keys(student)
console.log(keys)
// [ 'name', 'age', 'phone', 'money', 'isMale' ]

const values = Object.values(student)
console.log(values);
// [ 'Lijan', 21, '01779954212', 1000, true ]

const entries = Object.entries(student)
console.log(entries)
// [
//     [ 'name', 'Lijan' ],
//     [ 'age', 21 ],
//     [ 'phone', '01779954212' ],
//     [ 'money', 1000 ],
//     [ 'isMale', true ]
// ]

delete student.money
console.log(student);
// { name: 'Lijan', age: 21, phone: '01779954212', isMale: true }
