// Capitalize first letter of each word in array

const words = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

const capitalize = (arr) => {
    return arr.map(el => el[0].toUpperCase() + el.slice(1))
}