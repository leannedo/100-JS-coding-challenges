/* STRIP URL FROM DUPLICATE PARAMETERS AND REMOVE ANY PARAMETERS SPECIFIED AS 2ND ARGUMENT */
const url1 = 'www.codewars.com?a=1&b=2';
const url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
const url3 = 'www.codewars.com?a=1';
const url4 = 'www.codewars.com';
const url5 = 'www.codewars.com?b=2';

const stripUrlParamsSolution1 = (url, paramsToStrip=[]) => {
    const domain = url.split('?')[0];
    const query = url.split('?')[1];
    const queryMap = new Map();

    if (!query) return domain;

    const params = query.split('&')
                        .map(el => el.split('='))
                        .filter(el => !paramsToStrip.includes(el[0]));
    
    if (params.length === 0) return domain;

    params.forEach(pair => queryMap.set(pair[0], pair[1]));

    const queryStr = [...queryMap].map(([key, value]) => `${key}=${value}`).join('&');

    return `${domain}?${queryStr}`;
}

console.log(stripUrlParamsSolution1(url1)); // 'www.codewars.com?a=1&b=2'
console.log(stripUrlParamsSolution1(url1, ['a', 'b'])); // 'www.codewars.com'
console.log(stripUrlParamsSolution1(url4, ['b']));
console.log(stripUrlParamsSolution1(url5, ['b']));  


