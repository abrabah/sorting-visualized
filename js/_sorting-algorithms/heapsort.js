
var swap = require('_sorting-algorithms/swap');

// Running time O(n^2)


module.exports = function*(arr){
    var heapSize = arr.length;

    function* maxHeapify(arr,i){
        var l = ((i + 1) <<1) - 1;
        var r = (i + 1) << 1;
        var max = -1;
        if( l < heapSize && arr[l] > arr[i]){
            max =  l;
        } else{
            max = i;
        }
        if ( r < heapSize && arr[r] > arr[max]){
            max = r;
        }
        if(max != i){
            yield *swap(arr,i,max);
            yield*maxHeapify(arr,max);
        }
    }

    function* buildMaxHeap(arr){
        for(var i = arr.length>>1 ; i > -1; i--)
            yield*maxHeapify(arr,i)
    }

    yield*buildMaxHeap(arr);
    for(var i = arr.length -1; i > 0; i--){
        var tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        heapSize--;
//                yield arr;
        yield*maxHeapify(arr, 0);
    }
};
