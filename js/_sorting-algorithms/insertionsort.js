
var swap = require('_sorting-algorithms/swap');

// Running time O(n^2)


module.exports = function* (arr) {
    for (var i = 1; i < arr.length; i++) {
        var arrayChange = false;
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            yield*swap(arr,j -1, j);
            j--;
        }
    }
};
