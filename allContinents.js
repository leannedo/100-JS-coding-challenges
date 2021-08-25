/* CHECK IF ALL CONTINENTS PRESENT */

const list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    // { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

const list2 = [
    {"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
    {"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},
    {"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
    {"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
    {"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Asia","age":28,"language":"Java"},
    {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Americas","age":89,"language":"JavaScript"},
    {"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Oceania","age":29,"language":"Clojure"},
    {"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"}]

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const allContinentsSolution1 = list => {
    const res = [];
    list.forEach(dev => {
        if (!res.includes(dev.continent)) {
            res.push(dev.continent);;
        }
    })
    return res.length === continents.length;
}

const allContinentsSolution2 = list => {
    return continents.every(x => list.some(dev => x === dev.continent));
    // check if at least 1 element in list (some) equals to 1 element in continents
}

console.log(allContinentsSolution1(list1));
console.log(allContinentsSolution2(list1));
