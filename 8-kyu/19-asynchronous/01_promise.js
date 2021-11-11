const happy = true

const fetchData = new Promise((resolve, reject) => {
  if (!happy) {
    reject("Today is not happy")
  } else {
    resolve({id: 1, message: 'Today is happy'})
  }
})

fetchData.then(data => console.log(data))
