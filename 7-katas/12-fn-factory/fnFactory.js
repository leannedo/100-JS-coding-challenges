const fnFactory = x => array => array.map(el => el * x);

const multiplyByTwo = fnFactory(2);

console.log(multiplyByTwo([1, 2, 3]));