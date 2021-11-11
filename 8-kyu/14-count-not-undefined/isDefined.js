// Return the number of arguments that are not undefined.

function detectArguments(arg1, arg2, arg3) {
    let numUndefined = 3;
  
    if(arg1 === undefined) {
        numUndefined = numUndefined - 1;
    }
  
    if(arg2 === undefined) {
        numUndefined = numUndefined - 1;
    }
  
    if(arg3 === undefined) {
        numUndefined = numUndefined - 1;
    }
  
    return numUndefined;
}