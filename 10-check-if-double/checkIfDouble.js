const array1 = [10,2,5,3];
const array2 = [3,1,7,11];
const array3 = [-2,0,10,0];

// const checkIfDoubleWithMap = (arr) => {
//     let map = {};

//     for (const element of arr) {
//         map[element * 2] = element;
//         map[element / 2] = element;

//         // if (map[element] !== undefined){
//         //     return true;
//         // }
//     }

//     return map;
// };

// console.log(checkIfDoubleWithMap(array3));



// Given an array arr of integers, 
// check if there exists two integers N and M such that N is the double of M 
// ( i.e. N = 2 * M).
const checkIfDouble = (arr) => {
    // checking for edge cases
    if (!Array.isArray(arr) || arr.length === 0) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const multiply = arr[j] * 2;

            if (i !== j && arr[i] === multiply) {
                return true;
            }
        }
    }

    return false;
    
};

console.log(checkIfDouble([1, 2, 3, 4, 5]));
console.log(checkIfDouble([0, 1, 2]));