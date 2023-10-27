const removeFromArray = function(arr, ...itemsToRemove) {
    const args = [...itemsToRemove]
    return arr.filter(i => {
        let res = true
        args.forEach(itemToRemove => {
            if (itemToRemove === i) {
                res = false
            }
        })
        return res
    })
};

// Do not edit below this line
module.exports = removeFromArray;
