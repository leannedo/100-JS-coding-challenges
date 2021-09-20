const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

const usernameGenerator = list => {
    const formatLastname = name => name.split('.')[0].toLowerCase();
    const formatFirstname = name => name.toLowerCase();
    const calculateBirthyear = age => new Date().getFullYear() - age;

    list.forEach(dev => 
        dev.username = 
        `${formatFirstname(dev.firstName)}${formatLastname(dev.lastName)}${calculateBirthyear(dev.age)}`)

    return list;
}

console.log(usernameGenerator(list1));