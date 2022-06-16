const text = 'Labas rytas Lietuva';

// function charCount(str) {
//     const raides = [
//         ['L', 2],
//         ['a', 4],
//         ['b', 1],
//         ['s', 2],
//         [' ', 2],
//         ['r',2],
//     ];

//     return raides;

// }

// console.log(charCount(text));

function charCount(str) {
    const raides = {      
    };

    for (const symbol of str) {
        if (raides[symbol]) {
            raides[symbol]++;
        } else {
            raides[symbol] = 1;
        }
    }

    return raides;
}

console.log(charCount(text));

//for-in