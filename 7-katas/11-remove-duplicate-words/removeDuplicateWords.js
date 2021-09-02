/* APPLY SET TO REMOVE DUPLICATE WORDS FROM STRING */

const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    
    return [...set].join(' ');
}

