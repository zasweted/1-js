console.clear();

//[0..1)
const n1 = Math.random();
console.log(n1);

function randomBetween(min, max) {
    // return Math.random() * (max - min + 1)
    return Math.floor(min + Math.random() * (max - min + 1));
}
for (let i = 0; i < 20; i++) {
    console.log(randomBetween(1, 20));
}
