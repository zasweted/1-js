const marks = [10, 2, 8, 4, 6];
//iprastas for
console.log('-----------------for');
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}
//for-of
console.log('-----------------for-of');
for (const mark of marks) {
    console.log(mark);
}

//while
console.log('-----------------while');
let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    console.log(mark);
    i++;
}

//do-while
console.log('-----------------do-while');
let i2 = 0;
do {
    const mark = marks[i2];
    console.log(mark);
    i2++;
} while (i2 < marks.length);
//for-each
console.log('-----------------for-each');
marks.forEach((mark) => {
    console.log(mark);
    //a = mark; b = i; c = list;
});

//map (susiejimas-tas susijes su tuo)
//kaip modifikuoti kiekviena nari
console.log('-----------------map');
const rezMap = marks
    .map(mark => mark * 2)
    .map(mark => mark > 10 ? 10 : mark);

const rezMap2 = marks
    .map(mark => mark * 2 > 10 ? 10 : mark * 2);

console.log(marks);
console.log(rezMap);
console.log(rezMap2);

console.log('-----------------filter');
const filterMarks = marks
    .filter(mark => mark > 2)
    .filter(mark => mark <10);

const filterMarks2 = marks.filter(mark => mark > 2 && mark < 7);
console.log(marks);
console.log(filterMarks);
console.log(filterMarks2);

//map & filter combo
console.log('-----------------map & filter combo');

const mapFilter = marks
    .map(mark => mark * 2)
    .filter(mark => mark >5);
console.log(marks);
console.log(mapFilter);

//reduce (suendrinti, supaprastinti, sumazinti)
console.log('-----------------reduce');
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce);
console.log(sumReduce20);

const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, 20);
console.log(difReduce);
console.log(difReduce20);

const multiReduce = marks.reduce((total, mark) => total * mark);
const multiReduce20 = marks.reduce((total, mark) => total * mark, 20);
console.log(multiReduce);
console.log(multiReduce20);

const divReduce = marks.reduce((total, mark) => total / mark);
const divReduce20 = marks.reduce((total, mark) => total / mark, 20);
console.log(divReduce);
console.log(divReduce20);

//sort 
console.log('-----------------sort');
const numList = [10, 2, 8, 4, 6, 1, 7, 23, 17];
const minMaxList = [...numList].sort((a, b) => a - b); //.sort((a, b) => a - b);
const maxMinList = [...numList].sort((a, b) => b - a);

console.log(numList);
console.log(minMaxList, 'minMaxList');
console.log(maxMinList, 'maxMinList');

const stingList = ['b', 'd', 'c', 'de', 'be', 'a', 'at'];
const minMaxStrings = [...stingList].sort((a, b) => a > b ? -1 : 1);
const maxMinStrings = [...stingList].sort((a, b) => a < b ? -1 : 1);

console.log(stingList);
console.log(minMaxStrings);
console.log(minMaxStrings);
console.log(maxMinStrings);


//map > filter > sort > reduce