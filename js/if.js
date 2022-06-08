/*
SALYGOS SAKINYS

sablonai:
if () {}
if () {} else {}
if () {} else () {}
if () {} else () {}...
if () {} else () {}...

Paliginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !==
naudotini:>, <, >=, <=, ===, !==
nenaudotini: ==, !=

*/


const a = 77;
const b = 5555;

if (a > b) {
    console.log('pirmasis yra daugiau uz antra');
} else {
    console.log('pirmas nera daugiau uz antra');
}


const temperatura = 12;

if (temperatura > 12) {
    console.log('siandiena silta');
}

if (temperatura < 12) {
    console.log('siandiena salta');
}

const x = 7;
if (x === 5) {
    console.log('TAIP');
} else {
    console.log('NE');
}