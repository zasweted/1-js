console.clear();

const students = [
    {name : 'Petras', marks : [10, 9, 8, 7, 6]}, 
    {name : 'Maryte', marks : [7, 8, 7, 8, 6]},
    {name : 'Jonas', marks : [1, 2, 3, 4, 5]},
    {name : 'Ona', marks : [10, 10, 10, 10, 10, 10, 10, 10, 10]},
];

for(let i = 0; i < students.length; i++){
    const student = students[i];
    console.log(student);
}

console.log('###########################3');

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m ++) {
        for (let s = 0; s < 60; s ++) {
            console.log(`${h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`);
        }
    }
}