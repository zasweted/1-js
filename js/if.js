/*
SALYGOS SAKINYS

sablonai:
if () {}
if () {} else {}
if () {} else () {}
if () {} else () {}... else if () {}
if () {} else () {}... else if () {} else {}

Paliginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !==
naudotini:>, <, >=, <=, ===, !==
nenaudotini: ==, !=


loginiai operatoriai :
&& (and) - turi tenkinti visos salygos
|| (or) - turi tenkiti bent viena salyga
*/


// const a = 77;
// const b = 5555;

// if (a > b) {
//     console.log('pirmasis yra daugiau uz antra');
// } else {
//     console.log('pirmas nera daugiau uz antra');
// }


// const temperatura = 12;

// if (temperatura > 12) {
//     console.log('siandiena silta');
// }

// if (temperatura < 12) {
//     console.log('siandiena salta');
// }

// const x = 7;
// if (x === 5) {
//     console.log('TAIP');
// } else {
//     console.log('NE');
// }

const diena = 2;
if (diena ===1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        console.log('treciadienis');
    } if (diena === 3) {
        console.log('treciadienis');
    } else {
        console.log();
    }
    
}
console.log('----------------------------------');
const day = 2;
if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}

console.log('----------------------------------');

const temp = 20;
const lietus = true;
const nuoKadaSilta = 12;

if (lietus === true) {
    console.log('pasimk skieti');
} else {
    if (temp > nuoKadaSilta) {
        console.log('varom nuogi');
    } else {
        console.log('pasimk palta ir skieti');
    }
    console.log('gali eiti be striukes');
}
console.log('---------------------------------------------------');
if (lietus === true && temp > nuoKadaSilta) {
    console.log('2) varom nuogi');
} else if (lietus === true && temp < nuoKadaSilta) {
    console.log('2) pasiimk palta ir skieti');
} else if (lietus === false && temp >= nuoKadaSilta) {
    console.log('2) gali eiti su maike');
} else if (lietus === false && temp <= nuoKadaSilta) {
    console.log('2) pasiimk striuke');
}

