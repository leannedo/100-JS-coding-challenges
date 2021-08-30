const merge = (nums1, m, nums2, n) => {
    for (let i = m; i < nums1.length; i++) {
        for (let j = 0; j < n; j++) {
            if (nums1[i] === 0) {
               nums1[i] = nums2[j];
               // replace 0 with first element from arr2 
               i++; 
               // skip the new added element 
           }
        }
        
    }

    console.log(nums1.sort((a, b) => a - b));
};

merge([1,0,0,2,3,0,0,0],5,[2,5,6],3);