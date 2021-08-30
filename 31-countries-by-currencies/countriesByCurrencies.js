const fetch = require("node-fetch");
// https://github.com/node-fetch/node-fetch

const fetchCountries = async() => {
  try {
   const response = await fetch("https://restcountries.eu/rest/v2");
   return await response.json();
  } catch(error) {
    console.log('Error happened here!')
    console.error(error)
  }
}

const getCurrencyDict = async() => {
  const res = {};

  const data = await fetchCountries();

  data.forEach(el => {
    res[el.currencies[0].code] 
      ? res[el.currencies[0].code] = [el.name] 
      : res[el.currencies[0].code] = [...res[el.currencies[0].code], el.name];
  });

  console.log(res);
}

getCurrencyDict();


