const leapYears = function(year) {
    let res = false
    if (year%4===0) {
        res = true
        if (year%100===0) {
            res = false
            if (year%400===0) {
                res = true
            }
        }
    }
    return res
};

// Do not edit below this line
module.exports = leapYears;
