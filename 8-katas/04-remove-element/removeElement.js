const arr = [1, 2, 0, 0, 4, 0];
const value = 2;

const removeElementSolution1 = (nums, val) => {
    return nums.filter(el => el !== val).length;
};

// Runtime: 76 ms
// Memory Usage: 40.3 MB

const removeElementSolution2 = (nums, val) => {
    // loop 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            // loop 2
            i--;
        }
    }

    console.log(nums.length);
    // loop 3
}

const removeElementSolution3 = (nums, val) => {
    let currentIdx = 0;
    // initially it was 0, with the first element found it gets increased to 1
    // which is also the length of the elements !== val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[currentIdx] = nums[i];
            currentIdx++;
        }
    }

    console.log(currentIdx);
}

const removeElementSolution4 = (nums, val) => {
    let count = 0;
    // initially it was 0, with the first element found it gets increased to 1
    // which is also the length of the elements !== val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = '';
        } else {
            count++;
        }
    }

    console.log(count);
}