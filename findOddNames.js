const list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

const calculateCharCode = name => {
    return nameArr.split('').reduce((acc, cur) => acc + cur.charCodeAt(), 0)
}
const isOdd = number => number % 2 !== 0;

const findOddNamesSolution1 = list => {
    return list.filter(dev => isOdd(calculateCharCode(dev.firstName)));
}

const findOddNamesSolution2 = list => {
    return list.filter(dev => {
        return dev.firstName.split('').reduce((acc, cur) => acc + cur.charCodeAt(), 0) % 2 !== 0
    })
}

console.log(findOddNamesSolution2(list1));