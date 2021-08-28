/* GET THE FIRST PYTHON DEVELOPER OR DISPLAY A DEFAULT STRING */ 

const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
    { firstName: 'Henry', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  ];

/* 1st solution */ 
const getFirstPython = list => {
    const firstPython = list.find(dev => dev.language === 'Python');
    return firstPython ? `${firstPython.firstName}, ${firstPython.country}` : 'There will be no Python developers';
}

/* 2nd solution for reusable functions  */ 
const findPythonDev = (list) => list.find((dev) => dev.language === 'Python')
const getString = (dev) => `${dev.firstName}, ${dev.country}`
const defaultString = 'There will be no Python developers'

const getFirstPython = list => {
  const dev = findPythonDev(list)
  
  return dev ? getString(dev) : defaultString
}