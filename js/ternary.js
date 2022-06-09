/*
TERNARY operator
supaprastintas if/elsas

null - neegzistuojanti reiksme (einamuoju metu), kuria planuojame gauti

*/

let ats = null;
const a = 4;
const b = 2;

if (a < b) {
    ats = 'daugiau';
} else {
    ats = 'Ne daugiau';
}

console.log(ats);

const tern = a > b ? 'daugiau' : 'Ne daugiau';
console.log(tern);

/*
REIKSMIU POZITIVUMAS/ NEGATYVUMAS
boolean
Skaiciai: viskas TAIP , iskirus nulis(0)
null -> false
undefined -> false
'stringai' -> viskas TAIP, isskirus tuscias stringas

const egz = 1 ? 2 ? 3 : 4 : 5;
*/

if (true === true) {
    console.log('taip');
} else {
    console.log('ne');
}