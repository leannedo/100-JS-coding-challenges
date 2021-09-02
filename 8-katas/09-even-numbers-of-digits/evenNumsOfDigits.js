const findNumbers = (nums) => {
    let count = 0;
    
    for (const element of nums) {
        if (element.toString().length % 2 === 0) {
            count++;
        }
    }
    
    console.log(count);
};

findNumbers([12, 1, 34, 123]);