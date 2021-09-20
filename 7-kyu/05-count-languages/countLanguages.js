/* COUNT THE NUMBERS OF LANGUAGES AVAILABLE 
Expected result: {[nameOfLanguage]: count} 
*/ 

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

const list2 = [
    {"firstName":"Agustín","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"C"},
    {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"},
    {"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
    {"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},
    {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
    {"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
    {"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
    {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},
    {"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"}
]

// General idea: create an object to store all the language availables along with their counts

/* 1st solution using forEach */ 
const countLanguagesSolution1 = list => {
    const result = {};

    list.forEach(dev => {
        if (!result[dev.language]) {
            result[dev.language] = 0;
        }

        result[dev.language]++;
    })

    return result;
}

/* 2nd solution, an improved version using forEach */ 
const countLanguagesSolution2 = list => {
    const result = {};

    list.forEach(dev => result[dev.language] = (result[dev.language] || 0) + 1)

    return result;
}

/* 3rd solution using reduce */ 
const countLanguagesSolution3 = list => {
    return list.reduce((res, dev) => {
        res[dev.language] ? 
            res[dev.language] = res[dev.language] + 1 : 
            res[dev.language] = 1

        return res;

    }, {})
}