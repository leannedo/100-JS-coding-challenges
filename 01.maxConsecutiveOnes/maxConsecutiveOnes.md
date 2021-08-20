# Problem #10: Max Consecutive Ones
### Given an array of 0s and 1s, calculate the maximum number of consecutive ones

### For example:
```
const nums = [1, 1, 2, 3, 1, 1, 1] 
result = 3
```

# Solution
We need to return the highest number of 1s that is next to each other. 

So the idea is we will have a pointer to count the numbers of 1s. Then while we iterate through the original array, if we encounter any 1, we will increment the pointer by 1, but if we encounter any number that is not 1, we reset the pointer and start again at the next 1. 

We have another pointer to keep track of the highest count available. Before count is reset, we save its value to this pointer. If we find any value higher than this, we will reassign this counter to take that highest value and finally returns it. 


```js
const findMaxConsecutiveOnes = (nums) => {
    let count = 0; 
    let maxConsecutiveOnes = 0; 
    
    for (const element of nums) {
        if (element === 1) {
            count++;
        } else {
            count = 0;
        }
        
        if (maxConsecutiveOnes < count) {
            maxConsecutiveOnes = count;
        }
    }
    
    return maxConsecutiveOnes;
};
```