function add(a = 4, b = 5){
    return a + b;
}
const sum = add(5, 8)
console.log(sum)
// 13

const sum2 = add(5)
console.log(sum2)
// 10

const sum3 = add()
console.log(sum3)
// 9