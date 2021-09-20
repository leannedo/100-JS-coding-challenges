const array1 = [0,1,0,3,12]; // [1, 3, 12, 0, 0]
const array2 = [0];

const moveZeroesSolution1 = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) {
        return;
    }

    let temp = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            continue;
        }

        // attempt to switch place of 0 and non-zero element 
        temp = nums[i+1];
        nums[i+1] = nums[i];
        nums[i] = temp;
    }

    return nums;
};


// use an additional array
const moveZeroesSolution2 = (nums) => {
    let res = [];
    let zeroes = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            res.push(nums[i]);
            continue;
        }

        zeroes.push(nums[i]);
    }

    return [...res, ...zeroes];
}

// switch place using another pointer
const moveZeroesSolution3 = (nums) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }

    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// [1, 3, 12, 0, 0]
