const url1 = "http://github.com/carbonfive/raygun";
const url2 = "http://www.zombie-bites.com";
const url3 = "https://www.cnet.com";

const domainName = url => {
    const regex = /\/\/wwww.[a-z]{1,}./g;

    return url.match(regex)
}

console.log(domainName(url2));