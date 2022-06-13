//function declaration
function sudetis(a, b) {
    return a + b;
}
console.log(7, '+', 5, '=', sudetis(7, 5));

//function declaration
function atimtis(a, b) {
    return a - b;
}
console.log(7, '-', 5, '=', atimtis(7, 5));

//anonimine funkcija
const atimtis2 = function (a, b) {
    return a - b;
}
console.log(7, '-', 5, '=', atimtis2(7, 5));

//arrow (rodykline) funktion; pvz.: C# vadinama lambda funkcija

const daugyba = (a, b) => {
    return a * b;
}
console.log(7, '*', 5, '=', daugyba(7, 5));

//arrow function:
// kai logikos bloke yra tik viena procedura, tai nenauduojam {} ir return
const dalyba = (a, b) => a / b;
console.log(7, '/', 5, '=', dalyba(7, 5));

//arrow function:
// kai logikos bloke yra tik viena procedura, tai nenauduojam () ir return

const kvadrats = a => a ** 2;
console.log(7, '**', 2, '=', kvadrats(7));




















// function x1 () {}
// function x2 () {}

// const vartotojoPasirinkimas = 'g';
// const kuriaFunkcijaKviesti = vartotojoPasirinkimas === 'g' ? x1 : x2;

// kuriaFunkcijaKviesti()

// const kvadrats = function (a, b) {
//     return a*b;
// }

// const n1 = 7;
// const n2 = 7;

// // const plotas = a !== b ? function (a, b) {return a * b;} : function (a) {return a * a;}

// function staciakampioPlotas (a, b) {
//     return a * b;
// }

// function kvadratoPlotas (a) {
//     return a * a;
// }
// const plotas2 = n1 === n2 ? staciakampioPlotas : kvadratoPlotas;

// const funcList = [kvadratoPlotas, staciakampioPlotas];
// const funcIndex = n1 === n2 ? 0 : 1;
// const funcInUse = funcList[funcIndex];



// console.log(funcInUse(n1, n2));