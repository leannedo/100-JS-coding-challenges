const array = [17, 18, 4, 5, 6, 1];

// Runtime: 800 ms
// Memory Usage: 46.2 MB
const replaceElementsSolution1 = (arr) => {
    if (!Array.isArray(arr)) {
        return; 
    }

    if (arr.length <= 1) {
        return [-1];
    }

    for (let i = 0; i < arr.length; i++) {
        const rightPart = arr.slice(i+1);
        const max = rightPart.length > 0 ? Math.max(...rightPart) : -1;
        arr[i] = max;
        // with every index, 
        // find the max of the elements starting from index + 1 to index length - 1
    }
    return arr;
};

// Runtime: 88 ms
// Memory Usage: 42.6 MB
const replaceElementsSolution2 = (arr) => {
    if (!Array.isArray(arr)) {
        return; 
    }

    let max = -1;

    for (let i = arr.length - 1; i < -1; i--) {
        let temp = arr[i]; 

        if (temp > max) {
            max = temp;
        }

        arr[i] = max;
    }

    return arr;
};