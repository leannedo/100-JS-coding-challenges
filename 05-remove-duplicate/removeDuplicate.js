const arr = [1,1,2];

const removeDuplicatesSolution1 = (nums) => {
    const formattedNums = nums.filter((el, index) => nums.indexOf(el) === index);
    // when it encounters the el for the 2nd time, it will return the first index 
    // which is different from the current index 

    console.log(formattedNums);
}

removeDuplicatesSolution1(arr);

const removeDuplicatesSolution2 = (nums) => {
    nums.reduce((unique, curr) => {
        return unique.includes(curr) ? unique : [...unique, curr]
    }, [])
}
 