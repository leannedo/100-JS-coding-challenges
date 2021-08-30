/* COMPOSE THE FOOD OPTIONS */ 
const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
];

/* 1st solution */
const orderFood = list => {
    const res = {};

    list.forEach(dev => res[dev.meal] = (res[dev.meal] || 0) + 1);

    return res;
}

/* 2nd solution */
const orderFoodWithReduce = list => {
    return list.reduce((res, dev) => {
        res[dev.meal] = (res[dev.meal] || 0) + 1

        return res;
    }, {})
}
