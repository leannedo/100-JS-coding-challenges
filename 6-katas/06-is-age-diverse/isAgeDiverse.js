/* CHECK IF ALL AGE GROUPS ARE REPRESENTED */ 
const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

const ageGroups = {
    teens: (age) => { return 13 <= age && age >= 19 },
    twenties: (age) => { return 20 <= age && age >= 29 },
    thirties: (age) => { return 30 <= age && age >= 39 }, 
    forties: (age) => { return 40 <= age && age >= 49 }, 
    fifties: (age) => { return 50 <= age && age >= 59 }, 
    sixties: (age) => { return 60 <= age && age >= 69 },
    seventies: (age) => { return 70 <= age && age >= 79 },
    eighties: (age) => { return 80 <= age && age >= 89 },
    nineties: (age) => { return 90 <= age && age >= 99 },
    centenarian: (age) => { return age >= 100 },
}

const isAgeDiverse = list => {
    const fnArray = Object.values(ageGroups);
    return fnArray.every(fn => list.some(dev => fn(dev.age) === true));
}