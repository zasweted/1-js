console.clear();

//split- karpyti.

const str = 'Labas rytas Lietuva';
const words = str.split(' ');
const wordCount = words.length;
console.log(words);
console.log(wordCount);

const str2 = 'vasara';
const words2 = str2.split('as');
console.log(words2);

const person = 'Vardenis Tevvardis Pavardenis'; // V.P
const parts = person.split(' ').map(s => s[0]);
console.log(parts);
const inicialai = parts.join('.') + '.';
console.log(inicialai);
//tas pats tik kitaip
// const inicialai = person
//     .split(' ')
//     .map(s => word[0])
//     .join('.') + '.';
// console.log(inicialai);
console.log('--------------------------');
let inicialai2 = person[0];
for (let i=0; i < person.length; i++) {
    const letter = person[i];
    console.log(person[i]);
    if (person[i-1] === ' ') {
        inicialai2 += '.' + letter;
    }
}
inicialai2 += '.';
console.log(inicialai2);