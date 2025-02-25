const numbers = [2, 3, 4, 5, 6]
for(const num of numbers){
    console.log(num)
}

const characters = 'Lijan Ahmmed';
for(const char of characters){
    console.log(char)
}

const student = {
    name: 'Lijan',
    age: 21,
    phone: '01779954212',
    money: 1000,
    isMale: true
}
for(const key in student){
    const value = student[key];
    console.log(key, value)
}

const keys = Object.keys(student);
for(const key of keys){
    const getValue = student[key]
    console.log(key, getValue)
}