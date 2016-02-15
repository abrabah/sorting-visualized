
var swap = require('_sorting-algorithms/swap');


module.exports = function*(arr) {

    function *quicksort(a, b) {
        var split = -1;

        function *partition(a, b) {
            var sentinel = arr[b - 1];
            var i = a;

            for (var j = a; j < b - 1; j++)
                if (arr[j] <= sentinel)
                    yield*swap(arr, i++, j);

            split= i;
            yield*swap(arr, i, b - 1);

        }

        if (a < b) {
            yield*partition(a, b);
            yield*quicksort(a, split);
            yield*quicksort(split +1 , b);
        }
    }

    yield*quicksort(0, arr.length);

}