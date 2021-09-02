# Problem #14: Sort Array by Parity

### Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

### Return any array that satisfies this condition.

### Constraints:

1 <= nums.length <= 5000

0 <= nums[i] <= 5000

### For example:
```js
nums = [3,2,1,6,5]
expectedRes = [2, 6, 1, 3, 5] || [6, 2, 1, 3, 5] 
```
----

# 1st solution

The idea is we will have 2 arrays `even` and `odd` to keep track of even and odd numbers in the original array. Everytime we loop through each element of the original array, we then add that element to either `even` or `odd` array. 

We use `for...of` to iterate through the array because we don't need to know the index. 

```js
const sortArrayByParity = (nums) => {
    let even = [];
    let odd = [];

    for (const element of nums) {
        element % 2 === 0 ? even.push(element) : odd.push(element);
    }

    return [...even, ...odd];
};
```

# 2nd solution
The 2nd solution is actually a really smart idea that uses array functions like push, splice, slice, unshift, shift, etc

The expectation is to have an array with even numbers at the beginning part and odd numbers at the end part. 

So we will apply that mechanism into our solution, using unshift and push. The nature of unshift is to add a new element at the beginning of an array and push is to add a new element at the end. 

Instead of using 2 arrays as the 1st solution, we need to only use 1 array. 

```js
const sortArrayByParity = (nums) => {
    let newNums = [];

    for (const element of nums) {
        element % 2 === 0 ? newNums.unshift(element) : newNums.push(element);
    }

    return newNums;
};
```