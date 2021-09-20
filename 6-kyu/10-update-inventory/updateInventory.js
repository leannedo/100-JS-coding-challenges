/* UPDATE CURRENT STOCK WITH NEW STOCK AND RETURN A SORTED ARRAY */

const currentStock1 = 
    [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']];
const newStock1 = 
    [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']];

const updateInventorySolution1 = (currentStock, newStock) => {
    const currentStockObj = currentStock.reduce((acc, cur) => ({...acc, [cur[1]]: cur[0]}), {});
    const newStockObj = newStock.reduce((acc, cur) => ({...acc, [cur[1]]: cur[0]}), {});

    for (let key in newStockObj) {
        currentStockObj[key] = (currentStockObj[key] || 0) + newStockObj[key];  
    }

    return Object.keys(currentStockObj).sort().map(key => [currentStockObj[key], key]);
}

console.log(updateInventorySolution1(currentStock1, newStock1))

const updateInventorySolution2 = (currentStock = [], newStock = []) => {
    const obj = {};

    currentStock.concat(newStock).forEach(([v, k]) => obj[k] = (obj[k] || 0) + v );

    return Object.keys(obj).sort().map(k => [obj[k], k]);
}

console.log(updateInventorySolution2(currentStock1, newStock1));