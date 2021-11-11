// If the number is greater than 10, round up to the nearest integer. 
// If the number is below 10, round down to the nearest integer. 
// If the number is an integer, don’t round.

function round(x) {
    if(x % 1 === 0) {
        return x;
    }

    if(x <= 10) {
        return x - x % 1;
    }

    return x - x % 1 + 1;
}