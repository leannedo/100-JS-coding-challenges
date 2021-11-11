// Check whether arr1 is subset of arr2

isSubset(
    ['abc', 17, 'def'],
    ['def', 'abc', null, 17, 24]
); // -> true

// with forEach
function isSubsetSolution1(arr1, arr2) {
    let res = true
    arr1.forEach(el => {
     if (arr2.indexOf(el) === -1) res = false
    })
    
    return res
  }
  
// with reduce 
function isSubsetSolution2 (arr1, arr2) {
    return arr1.reduce(function(bool, nextItem) {
        if(bool === false) {
            return false;
        }
    
        return arr2.includes(nextItem);
        // this will be the accumulator of the next run
  }, true);
}
  