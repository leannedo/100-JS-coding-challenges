const array1 = [3,2,1,6,5]; // [2, 6, 1, 3, 5]

// use 2 arrays and spread syntax
const sortArrayByParitySpread = (nums) => {
    let even = [];
    let odd = [];

    for (const element of nums) {
        element % 2 === 0 ? even.push(element) : odd.push(element);
    }

    return [...even, ...odd];
};

console.log(sortArrayByParitySpread(array1));


// use array functions unshift, push 
const sortArrayByParity = (nums) => {
    let newNums = [];

    for (const element of nums) {
        element % 2 === 0 ? newNums.unshift(element) : newNums.push(element);
    }

    return newNums;
};

console.log(sortArrayByParity(array1));