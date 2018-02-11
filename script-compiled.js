'use strict';

console.log('Zadanie 1');
var a = 'Hello';
var b = 'World';
console.log(a + ' ' + b);

console.log('Zadanie 2');
var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

console.log('Zadanie 3');
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var suma = 0;
    args.forEach(function (arg) {
        return suma += arg;
    });
    return suma / args.length;
};
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

console.log('Zadanie 4');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

console.log('Zadanie 5');
var dane = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = dane[2],
    lastname = dane[4];

console.log(firstname + ' ' + lastname);
