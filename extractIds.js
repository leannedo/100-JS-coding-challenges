const data1 = {
    id: 1,
    items: [ {id: 2}, {id: 3, items: [{id: 4}, {id: 5}]}]
}
const data2 = {
    id: 1,
    items: [ {id: 2}, {id: 3}]
}
const data3 = {
    id: 1,
    items: [ {id: 2, items: [{id: 3}, {id: 4}]}, {id: 5, items: [{id: 6}, {id: 7}]}]
}
const data4 = {}

const extractIdsSolution1 = data => {
    const res = [];
    res.push(data.id);
    if (data.items) {
        data.items.forEach(el => {
            res.push(el.id);

            if (el.items) {
                el.items.forEach(a => {
                    res.push(a.id)
                })
            }
        })
    }

    return res;
}

const extractIdsSolution2 = data => {
    if (!data.id) {
        return [];
    }
    if (Array.isArray(data.items) && data.items.length > 0) {
        return data.items.reduce((acc, el) => acc.concat(extractIdsSolution2(el)), [data.id]);
    } 
    return [data.id];
}

const extractIdsSolution3 = data => {
    //return (JSON.stringify(data).match(/\d+/g)||[]).map(x=>+x);
    return JSON.stringify(data).match(/\d+/g);
}

console.log(extractIdsSolution3(data3));