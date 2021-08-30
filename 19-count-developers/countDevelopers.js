/* COUNT THE NUMBERS OF DEVELOPERS COMING FROM EUROPE AND CODE IN JAVASCRIPT */ 

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

/* 1st solution to filter and count the elements that matches the condition */ 
const countDevelopersWithFilter = list => {
    return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
}

/* 2nd solution implementing the above idea, using reduce */ 
const countDevelopersWithReduce = list => {
    return list.reduce((count, dev) => (
        dev.continent === 'Europe' && dev.language === 'JavaScript' ? count + 1 : count
    ), 0)
}
