/* CHECK IF ALL DEVELOPERS CAN CODE IN THE SAME LANGUAGE */ 

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'Java' },
];

/* 1st solution to create an array of available languages, compared with 1 */ 
const isSameLanguage = list => {
    const res = [];

    list.forEach(dev => {
        !res.includes(dev.language) && res.push(dev.language)
    })

    return res.length === 1;
}

/* 2nd solution, an improved version of above idea, but with Set */ 
const isSameLanguageWithSet = list => {
    return new Set(list.map(dev => dev.language)).size === 1;
}

/* 3rd solution, test every element against the first element in the array */ 
const isSameLanguageWithEvery = list => {
    return list.every(dev => dev.language === list[0].language)
}