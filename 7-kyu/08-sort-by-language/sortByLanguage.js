const list1 = [  
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

const dynamicSort = (key) => {
    let sortOrder = 1;

    return function(a, b) {
        let result = 0;

        if (a[key] < b[key]) {
            result = -1;
        } 
        if (a[key] > b[key]) {
            result = 1;
        }

        return result * sortOrder;
    }
}

const dynamicSortMultiple = (key1, key2) => {
    let props = [key1, key2];

    return function (obj1, obj2) {
        let i = 0;
        let result = 0;
        let numberOfProperties = props.length;
        
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

const sortByLanguageSolution1 = list => {
    return list.sort(dynamicSortMultiple('language', 'firstName'));
}

/*****/
const sortByLanguageSolution2 = (list) => {
    return list.sort((a, b) => a.language === b.language 
        ? a.firstName.localeCompare(b.firstName)
        : a.language.localeCompare(b.language))
}
