function largestSubarraySum(arr) {
    
    // lol 0 is actually too high as a default max in a all negative arr so I started max as first el
    let currentMax = 0, max = 0;
    
    //loopity boopity, we could skip the 1st index but the loop would be less englishy
    for(let num of arr) {
        
        // add num to our current sum
        currentMax += num;
        
        // compare currentMax to max and update max accordingly
        max = currentMax > max ? currentMax : max;
        
        /* if our currentMax < 0 it means our num is a negative number that with a higher absVal then our current sequence/sum of
            numbers... this means we can start tracking a new sequence... This is true because a larger positive number that
            could "undo" this negative would have to be larger than the negative and thus would be larger than the previous                   sum/sequence on its own anyway. 
        */
        
        if (currentMax < 0 ) currentMax = 0;
    
    }
    
    return max;
};

//yolo([-2,1,-3,4,-1,2,1,-5,4])

// Have not tested with learn yet(need to reinstall IDE) but was messing around using leetCode version/editor so it should work

// time complexity should be o(n) as number of calculations grow in a linear relationship to n via the for loop.

// space complexity should be o(1) as the amount of memory used is constant regardless of input size.
