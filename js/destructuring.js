console.clear();

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Bart',
            age: 50,
        },
        {
            name: 'Liza',
            age: 60,
        },
    ]
}

// const name = person.name;
// const isMarried = person.isMarried;
// const age = person.age;

const { age, children, ...otherInfo } = person;
const [bart, liza] = children;

const { age: bartAge} = bart;
const { age: lizaAge} = liza;

console.log('BART AGE:', bartAge);
console.log('LIZA AGE:', lizaAge);

console.log(age);
console.log(children);
console.log(otherInfo);

console.log(bart);
console.log(liza);


const marks = [1, 2, 3, 4, 5, 6, 7];

// const first = marks[0];
const fourth = marks[3];

const [first, second, ...other] = marks;

console.log(first);
console.log(second);
console.log(other);

function info(...params){
    return `info: ${params.length}`;
}

console.log(info());
console.log(info(undefined));
console.log(info(1));
console.log(info(1, undefined));
console.log(info(1, 2));
console.log(info(1, 2, 'labas'));
console.log(info(1, 2, 'labas', true));

console.log('#####################');
// function biggest(a, b){
//     if (a > b) {
//         return a;
//     }
//     return b;
// }

function biggest(...list){
    return Math.max(...list);
}

console.log(biggest(2, 4));
console.log(biggest(22, 4));
console.log(biggest(7));
console.log(biggest(7, 8, -4, 9)); 

function asd(firstName, lastName, ...other) {
    console.log(firstName);
    console.log(lastName);
    console.log(otherStuff);
    return ' --------------------- '
}

console.log(example('Petras',));
console.log(example('Petras', 'Petraitis'));
console.log(example('Petras', 'Petraitis', 1, 2, 3, 4));