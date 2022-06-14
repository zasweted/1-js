/*
SWITCH 
salygu palyginimas, bevei kaip if () {}
*/

const day = 1;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
         break;
    case 3:
        console.log('treciadienis');
         break;
    case 4:
        console.log('ketvirtadienis');
         break;
    case 5:
        console.log('penktadienis');
         break;
    case 6:
        console.log('sestadienis');
         break;
    case 7:
        console.log('sekmadienis');
         break;
    case 8:
        console.log('tokios dienos savaiteje nera');
         break;
}



const weekday = 2;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}