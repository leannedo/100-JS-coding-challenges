/* FIND THE AVERAGE AGE, ROUNDED TO THE NEAREST INTEGER */

const list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 71, language: 'Python' },
];

/** Solution using reduce and Math.round() */
const getAverageAge = list => {
    const age = list.reduce((res, dev) => (res + dev.age), 0) / list.length;

    return Math.round(age);
}