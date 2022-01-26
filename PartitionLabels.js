
 var partitionLabels = function(s) {
    let maxIndexFound = {}, res = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        maxIndexFound[c] = i;
    }
    let currMax = maxIndexFound[s[0]];
    let currLength = 0;
    
    for (let i = 0; i<s.length; i++){
        currLength++;
        currMax = Math.max(currMax, maxIndexFound[s[i]]);
        if(i == currMax){
            res.push(currLength)
            currLength = 0;
        }
    }

    return res;
}
