
var swap = require('_sorting-algorithms/swap');

// Running time O(n^2)


module.exports = function*(arr) {
    for (var i = 0; i < arr.length; i++) {
        var arrayChange = false;
        for (var j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                yield * swap(arr, j-1, j);
                arrayChange = true
            }
        }
        if (!arrayChange) {
            return
        }
    }
};
