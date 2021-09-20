const duplicateZeros = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            // add 0 at index i, remove 0 element
            i++;
            // IMPORTANT to skip the added zero
            arr.pop();
            // one element added means one element removed (to keep the fixed length)
        }
    }

    console.log(arr);
};

duplicateZeros([1, 0, 2, 0, 3, 4, 0, 0]); 