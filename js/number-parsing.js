console.clear();

const n1 = '7rtrt';
const n2 = '5asdf';

function suma(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a)) {
        return 'ERROR: Pirmas parametras yra ne skaicius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: Antras parametras yra ne skaicius';

    }
    return a + b;
}
   


const ats = suma(n1, n2);
console.log(ats);