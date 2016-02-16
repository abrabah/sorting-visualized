
var swap = require('_sorting-algorithms/swap');

// Running time O(n*ln(n))


module.exports = function*(arr){

    function *quicksort(a, b){
        var split = -1;
        function *partition(a,b){
            var sentinel = arr[a];
            var i = a - 1;
            split = b;

            while(true){

                do{
                    split--;
                } while (arr[split] > sentinel);

                do {
                    i++;
                } while (arr[i] < sentinel);

                if (i < split)
                    yield*swap(arr,i,split);
                else{
                    split++;
                    return;
                }
            }
        }
        if ( (b-a) > 1){
            yield*partition(a,b);
            yield*quicksort(a,split);
            yield*quicksort(split, b);
        }
    }

    yield*quicksort(0,arr.length);
};
