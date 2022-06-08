/*
FUNCTION:
logikos gabalas, kuri galim/norim perpanauduoti

- gali gauti parametrus (pradines salygos)
- visada grazina savo rezultata:
    - mes galim nurodyti rezultata grazinti
    - jei nenurodysime, tai bus grazintas "default`inis" rezultatas
        - "default`inis" rezultatas yra undefined
*/

// const n1 = 4;
// const n2 = 7;
// const rez1 = n1 + n2;
// console.log(rez1);

// const n3 = 55
// const n4 = 11
// const rez2 = n3 + n4;
// console.log(rez2);

// const n5 = 1234;
// const n6 = 2345;
// const rez3 = n5 + n6;
// console.log(rez3);

function sumavimas(a, b) {
    return a + b;
}

function daugyba(a, b) {
    return a * b;
}

function dalyba(a, b) {
    return a / b;
}

function atimtis(a, b) {
    return a - b;
}


const n1 = 4;
const n2 = 7;
const s1 = sumavimas(n1, n2);
const m1 = daugyba(n1, n2);
const d1 = dalyba(n1, n2);
const a1 = atimtis(n1, n2);
console.log(n1, '+', n2, '=', s1);
console.log(n1, '*', n2, '=', m1);
console.log(n1, '/', n2, '=', d1);
console.log(n1, '-', n2, '=', a1);

function demo() {
    return 'demo';
}

console.log(demo());
console.log(demo(1));
console.log(demo(1, 2));
console.log(demo(1, 2, 3));


// const n3 = 44;
// const n4 = 77;
// const rez2 = sumavimas(n3, n4);
// const d2 = daugyba(n3, n4);
// const dal2 = dalyba(n3, n4);
// const a2 = atimtis(n3, n4);
// console.log(rez2);
// console.log(d2);
// console.log(dal2);
// console.log(a2);