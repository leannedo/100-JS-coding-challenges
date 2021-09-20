/* CHECK IF THERE IS NO LANGUAGE PRESENT MORE THAN TWICE AS MUCH AS OTHER LANGUAGES */

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

const isLanguageDiverseSolution1 = list => {
    const langList = list.reduce((acc, cur) => {
        acc[cur.language] ? acc[cur.language] = acc[cur.language] + 1 : acc[cur.language] = 1;

        return acc;
    }, {});

    const langArr = Object.values(langList);

    const res = []

    for (let j = 0; j < langArr.length; j++) {
        for (let i = 0; i < langArr.length; i++) {
            if (langArr[j] > 2 * langArr[i]) {
                res.push(langArr[j]);
            }
        }
    }

    return res.length === 0;
}

const isLanguageDiverseSolution2 = list => {
    const langList = list.reduce((acc, cur) => {
        acc[cur.language] = (acc[cur.language] || 0) + 1;
        return acc;
    }, {});

    const langArr = Object.values(langList);

    return Math.max(...langArr) / Math.min(...langArr) <= 2;
}

console.log(isLanguageDiverse(list1));