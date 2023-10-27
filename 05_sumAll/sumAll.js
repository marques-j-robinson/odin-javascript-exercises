const validateNums = nums => {
    const validNums = nums.filter(i => typeof(i) === 'number')
    return nums.length === validNums.length
}

const sumAll = function(...args) {
    const nums = [...args]
    if (!validateNums(nums)) {
        return 'ERROR'
    }
    nums.sort()
    let sum = 0
    let start = nums[0]
    const end = nums[nums.length-1]
    while (start <= end) {
        sum += start
        ++start
    }
    if (sum < 0) {
        return 'ERROR'
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
