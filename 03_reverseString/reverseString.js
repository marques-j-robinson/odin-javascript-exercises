const reverseString = function(s) {
    let res = ''
    i = s.length-1
    while (i >= 0) {
        res = res + s[i]
        --i
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
