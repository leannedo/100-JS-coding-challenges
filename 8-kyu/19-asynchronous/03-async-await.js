import fetch from 'node-fetch'

const fetchDog = async () => {
    const res = await fetch('https://random.dog/woof.json');
    const data = await res.json();
    return data;
}

fetchDog().then(dogData => console.log(dogData));

// fetch('https://random.dog/woof.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
// })