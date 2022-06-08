"use strict";

/*
kintamuju inicijavimo budai:
const - kai verte negali keistis (default)
let - kai verte norime, jog galetu keistis
var - senasis budas (nenaudoti, jei nenori PROBLEMU)
*/

const username = 'Petras';

let pinigine = 1;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

const a = 9.999999;
const b = 2;

console.log(a, '+', b, '=', a + b);
console.log(a, '-', b, '=', a - b);
console.log(a, '*', b, '=', a * b);
console.log(a, '/', b, '=', a / b);
console.log(a, '%', b, '=', a % b);


let skaicius = 10;
skaicius = skaicius + 3;
skaicius += 3;
skaicius -= 3;
skaicius -= 3;
skaicius *= 4;
skaicius /= 2;
skaicius %= 7;
console.log('Skaicius:', skaicius);

console.log(2 * 2);
console.log(2 ** 2);
console.log(3 ** 1);
console.log(3 ** 2);
console.log(3 ** 3);
console.log(3 ** 4);

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(7));
console.log(Math.abs(-7));

console.log(Math.ceil(2.0001));
console.log(Math.ceil(2.0001, ' ceil ',Math.ceil(2.0001)));
console.log(Math.ceil(2.9999, ' ceil ',Math.ceil(2.9999)));
console.log(Math.ceil(3, ' ceil ',Math.ceil(3)));

console.log(Math.ceil(2.0001, ' floor ',Math.floor(2.0001)));
console.log(Math.ceil(2.9999, ' floor ',Math.floor(2.9999)));
console.log(Math.ceil(3, ' floor ',Math.floor(3)));

console.log(Math.ceil(2.0001, ' round ',Math.round(2.0001)));
console.log(Math.ceil(2.9999, ' round ',Math.round(2.9999)));
console.log(Math.ceil(2.4999, ' round ',Math.round(2.4999)));

// [0..1)
console.log(Math.random());
