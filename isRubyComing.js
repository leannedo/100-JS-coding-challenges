/* CHECK IF THERE IS AT LEAST ONE RUBY DEVELOPER */

const list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

/* 1st solution to count the numbers of Ruby developers, compared with 0 */
const isRubyComing = list => {
    const rubyDevs = list.reduce((count, dev) => (
        dev.language === 'Ruby' ? count + 1 : count
    ), 0)

    return rubyDevs > 0;
}

/* 2nd solution, and improved version using some to test if at least 1 element passes the condition */
const isRubyComingWithSome = list => list.some(dev => dev.language === 'Ruby');
