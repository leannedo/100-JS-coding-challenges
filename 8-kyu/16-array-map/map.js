// Rewrite Array.map function 

const arr = [1, 2, 3]; // [2, 4, 6]

const timesTwo = (item) => item * 2;

const map = (arr, transform) => {
    const copyArr = [];
    for (let i = 0; i < arr.length; i++) {
        copyArr[i] = transform(arr[i], i, arr);
    }
    
    return copyArr;
}

console.log(map(arr, timesTwo))

console.log(arr.map(el => el * 2))



