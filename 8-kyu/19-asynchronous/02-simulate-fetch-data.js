const fetchData = () => {
    const fetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching data complete!')
            resolve({id: 1, message: 'Happy day'})
        }, 5000)
    });

    return fetch;
}

const parseData = (data) => {
    const parse = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Parse data complete!');
            resolve('Data is ' + data.message)
        }, 5000)
    });

    return parse;
}

const echoData = (data) => {
    
    setTimeout(() => {
        console.log(data + ' now')
    }, 1000)
}

// fetchData().then(parseData).then(echoData).catch(err => console.log(err));

const num = 1

const p = new Promise((resolve, reject) => {
    if (num>3) {
        resolve('num is bigger than 3')
    } else {
        reject('num is not bigger than 3')
    }
})

p.then(res => console.log(res)).catch(err => console.log(err))