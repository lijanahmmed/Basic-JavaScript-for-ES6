function add(a, b){
    return a + b;
}

const add2 = function(a, b){
    return a + b;
}

const add3 = (a, b) => a + b;

const sum = add(5, 6)
const sum2 = add2(15, 10)
const sum3 = add3(50, 3)

console.log(sum)
console.log(sum2)
console.log(sum3)
