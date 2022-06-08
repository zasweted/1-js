/*
String -> tekstas
inicijavimas :
- viengubos kabutes
- dvigubos kabutes
- backtick kabutes
*/

const username = 'Petras';
console.log(username);

const city = "Klaipeda";
console.log(city);

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

const kabute121 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute121);

const kabute122 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute122);

const keliosEilutes = '<div>\
                            <p>Labas</p>\
                        </div>';
console.log(keliosEilutes);

const parosMetas = 'vakaras'
const username2 = 'Maryte';
//Labas rytas, Maryte!
//Labas vakaras, Maryte!
const pasisveikinimas = 'Labas ' + parosMetas + ', ' + username2 + '!';
console.log(pasisveikinimas);

const hello = `Labas ${parosMetas}, ${username2}!`;
console.log(hello);

// siandiena yra 23 laipsniai silumos ir nuotaika yra gera.
const temp = 23;
const nuotaika = 'gera';
const orai = `siandiena yra ${temp} (jauciasi kaip ${temp + 4 }) laipsniai silumos ir nuotaika yra ${nuotaika}.`;
console.log(orai);
