console.log('Zadanie 1');
let a = 'Hello';
let b = 'World';
console.log(`${a} ${b}`);

console.log('Zadanie 2');
const multiply = (x , y = 1) => x * y;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

console.log('Zadanie 3');
const average = (...args) => {
    let suma = 0 ;
    args.forEach(arg => suma += arg);
    return suma/args.length;
};
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

console.log('Zadanie 4');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

console.log('Zadanie 5');
const dane = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstname, , lastname] = dane;
console.log(`${firstname} ${lastname}`);