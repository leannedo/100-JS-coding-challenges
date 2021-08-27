const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const findSeniorSolution1 = list => {
    // thank you for checking out the Coding Meetup kata :)
    const res = [];
    list.forEach(dev => res.push(dev.age));

    const max = Math.max(...res);

    return list.filter(dev => dev.age === max);
}

const findSeniorSolution2 = list => {
    const maxAge = Math.max(...list.map(dev => dev.age));
    return list.filter(dev => dev.age === maxAge);
}

const findSeniorSolution3 = list => {
    let maxAge = list[0].age;

    return list.reduce((acc, dev) => {
        if (dev.age >= maxAge) {
            maxAge = dev.age;
            acc.push(dev);
        }

        return acc;
    }, [])
}

console.log(findSeniorSolution3(list1));