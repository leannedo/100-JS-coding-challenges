#### Problem #10: Check If N and Its Double Exist

### Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

### More formally check if there exists two indices i and j such that :

- i != j
- 0 <= i, j < arr.length
- arr[i] == 2 * arr[j]

# 1st solution: 2 pointers 

For this solution, we implement 2 pointers i and j. If we find any combination of i and j such that 2 times of j equals to i, we return true. We also account for edge case when 0 is present in our array, then it will be its double. For that case, we need to add another condition that require i and j is different. 

```js
const checkIfDouble = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const multiply = 2 * arr[j];
            if (i !== j && arr[i] === multiply) {
                return true;
            }
        }
    }

    return false;
};
```

### Statistics:
Runtime: 80 ms
Memory Usage: 38.9 MB

# 2nd solution: Hashtable

Here we use a concept of hashtable, which the most common type in Javascript is Object. 
The idea is we will iterate through the original array and with each element we will store in the object a pair of key-value. 

Value is the element. The first key of the pair is its double and the second key is its halve.

At the same time we iterate through the array to check if the current element exists (it could be the result of doubling or halving other elements that we have done prior to this). 

```js
const checkIfDouble = (arr) => {
    let map = {};
    
    for (const element of arr) {
        map[element * 2] = element;
        map[element / 2] = element;

        if (map[element] !== undefined){
            return true;
        }
    }

    return false;
};
```