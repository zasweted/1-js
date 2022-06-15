const petrasFirstName = 'Petras';
const petrasAge = 99;
const petrasIsMarried = true;


const maryteFirstName = 'Maryte';
const maryteAge = 87;
const maryteIsMarried = false;



const jonasFirstName = 'Jonas';
const jonasAge = 66;
const jonasIsMarried = false;


const onaFirstName = 'Ona';
const onaAge = 17;
const onaIsMarried = true;

//------------------------------
const names = [];
const ages = [];
const isMarried = [];

const people = [
    ['Petras', 99, true, [10, 2, 8, 4, 6]],
    ['Maryte', 87, false, [10, 2, 8, 4, 6]],
    ['Jonas', 66, false, [10, 2, 8, 4, 6]],
    ['Ona', 17, true, [10, 2, 8, 4, 6]],
];

const personIndex = 0;
const person = people[personIndex];
const personName = people[personIndex][0];
const personAge = people[personIndex][1];
const personStatus = people[personIndex][2];
const personFirstMark = people[personIndex][3][0];

console.log(personName);
console.log(personAge);
console.log(personStatus);
console.log(personFirstMark);

//----------------------------------------------------------


const people2 = [
    {
        name: 'Petras',
        age: 99,
        isMarried: true, 
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        age: 87,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Jonas',
        age: 66,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Ona',
        age: 17,
        isMarried: true, 
        marks: [10, 2, 8, 4, 6],
    },
];
const pn = people2[1]['name'];
const pa = people2[1]['age'];
const pm = people2[1]['marks'];//[3]
const ps = people2[1]['isMarried'];
console.log(pn);
console.log(pa);
console.log(pm);
console.log(ps);

//-----------------------------------------

// gender: true/male
// gender: false/female
const students = [
    {
        name: 'Petras',
        dob: 2015,
        marks: [],
        gender: true,
        responsibleHumans : [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    48484848484,
                    56565656566,
                ],
                email: 'jonas@jonas.lt',
                adress: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            }
        ]
    }
];

const respHumans = students[0].responsibleHumans; //arba ['responsibleHumans'];
console.log(respHumans[0].name);// arba ['name'];

// for (const human of respHumans) {
//  console.log(human.name);
    // for (const phone of human.phone) {
    //     console.log('-', phone);
    // }    
//}

console.log(students[0].responsibleHumans[0].adress.street);
console.log(students[0].responsibleHumans[0].adress.buildingNr);

