/* GREET EACH DEVELOPER WITH THEIR NAME AND THEIR CODING LANGUAGE 
Expected result: 
const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', 
    continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi <firstName>, what do you like the most about <language>?'},
];
*/ 

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

// General idea: iterate through each obj in the list and add an extra property

/* 1st solution using map */ 
const greetDevelopers = list => {
    return list.map(dev => {
        const greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
        
        return {
            ...dev, 
            'greeting': greeting
        }
    })
}

/* 2nd solution, an improved version using map */ 
const greetDevelopersImproved = list => list.map(dev => ({
    ...dev, 
    'greeting': `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
}))

/* 3rd solution using forEach */ 
const greetDevelopersForEach = list => {
    list.forEach(
        dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
    )

    return list;
}
