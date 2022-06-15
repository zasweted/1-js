const sudetis = (a, b) => a + b;
const atimtis = (a, b) => a - b;
const daugyba = (a, b) => a * b;
const dalyba = (a, b) => a / b;

const userN1 = 7;
const userN2 = 5;
const userAction = '-';

let answer = 0;
if (userAction === '+') {
    answer = sudetis(userN1, userN2);
} else if (userAction === '-') {
    answer = atimtis(userN1, userN2);
} else if (userAction === '*') {
    answer = daugyba(userN1, userN2);
} else if (userAction === '/') {
    answer = dalyba(userN1, userN2);
}


console.log(userN1, userAction, userN2, '=', answer);