/*
CIKLAI:
for, for-of, for-in, foreach, while, do-while, map, filter, reduce, sort, ...

sablonas:
for () {}
*/
console.log('START');

const kupiuros = [20, 5, 50, 100, 20, 200, 500];

let pinigine = 0;


for (let i=0; i < kupiuros.length; i++) {
    const kupiura = kupiuros[i];
    pinigine += kupiura;
    console.log(i, ')', kupiura, '->', pinigine);
}

console.log('END');
console.log(pinigine);


for (let i = -90; i >= -100; i--) {
    console.log(i);
}

console.log('----------------------');
console.log([].length);
console.log(['a'].length);
console.log(['a', 'b'].length);
console.log(['a', 'b', 'labas'].length);

console.log();