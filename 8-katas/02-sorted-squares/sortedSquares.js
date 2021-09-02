// Runtime: 112 ms
// Memory Usage: 45.8 MB
const sortedSquaresSolution1 = (nums) => {
    const newNums = nums.map(el => el * el).sort((a, b) => a - b);

    console.log(newNums);
};

sortedSquaresSolution1([-1, 0, 1, 14, 2]);

var sortedSquaresSolution2 = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let final = [];
    
    for(let x = nums.length - 1; x >= 0; x-=1) {
        if(nums[left] * nums[left] > nums[right] * nums[right]) {
            final[x] = nums[left] * nums[left];
            left+=1;
            console.log(final);
        } else {
            final[x] = nums[right] * nums[right];
            right -= 1;
            console.log(final);
        }
    }
    console.log(final);
};

sortedSquaresSolution2([-1, 0, 1, 14, 2]);