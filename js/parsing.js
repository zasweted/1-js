console.clear();

console.log('------------parseInt'); //skaicia be kablelio
console.log(parseInt(5));
console.log(parseInt(5.3));
console.log(parseInt('5'));
console.log(parseInt('5a'));
console.log(parseInt('a'));
console.log(parseInt('a5'));

console.log('------------parseFloat'); //skaiciai po kablelio
console.log(parseFloat(5));
console.log(parseFloat(5.3));
console.log(parseFloat('5'));
console.log(parseFloat('5a'));
console.log(parseFloat('a'));
console.log(parseFloat('a5'));

console.log('------------ +'); // tik skaiciai, jei yra raide ar kitas simbolis - NaN
console.log(+5);
console.log(+5.3);
console.log(+'5');
console.log(+'5a');
console.log(+'a');
console.log(+'a5');