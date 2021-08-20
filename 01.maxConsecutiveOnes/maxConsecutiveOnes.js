const findMaxConsecutiveOnes = (nums) => {
    let count = 0; 
    let maxConsecutiveOnes = 0; 
    
    for(const element of nums) {
        if(element === 1) {
            count++;
        } else {
            count = 0;
        }
        
        if (maxConsecutiveOnes < count) {
            maxConsecutiveOnes = count;
        }
    }
    
    console.log(maxConsecutiveOnes);
};

findMaxConsecutiveOnes([0,1,1,0,1,1,1]);