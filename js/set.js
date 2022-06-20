console.clear()

const a = [1, 2, 3, 4, 'labas', 1, 4, 2, 5, 7, '1'];

//1)
const b1 = [];
const b2 = [];
for (const n of a) {
    if(!b1.includes(n)){
        b1.push(n);
    }else {
        b2.push(n);
    }
}
console.log(b1);
console.log(b2);
console.log('---------------');
//2)
const c1 = {};
const c2 = [];

for (const n of a) {
    if(!(n in c1)) {
        c1[n] = 1;

    }
}
for (const key in c1) {
    c2.push(+key); // + konvertoja stringa i skaiciu
}
console.log(c1);
console.log(c2);

//3)
console.log('-----------------');

const d1 = {};

for (const n of a) {
    if(!(n in d1)) {
        d1[n] = 1;

    }
}
console.log(d1);
const d2 = Object.keys(d1);
console.log(d2);

// 4)
const rinkinys = new Set();
for (const n of a) {
    rinkinys.add(n);
}
console.log(rinkinys);
console.log(rinkinys.size);
console.log(rinkinys.entries());

rinkinys.forEach(n => {
    console.log(n);
})

const r = [];
for (const n of rinkinys) {
    r.push(n);
}

console.log(r);

console.log([...rinkinys]);
console.log('----------------------');

// 4b
console.log([...(new Set(a))]);