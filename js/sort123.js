var bubbleSort = require('sorting-algorithms/bubblesort');
var heapSort = require('sorting-algorithms/heapsort');
var quickSort = require('sorting-algorithms/quicksort');


function draw(arr, id) {
    if (arr === undefined)
        return;
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    var spacing = Math.floor(canvas.width / arr.length);

    ctx.beginPath();
    for (var i = 0; i < arr.length; i++) {
        ctx.moveTo(1 + i * spacing, canvas.height);
        ctx.lineTo(1 + i * spacing, canvas.height - arr[i])
    }
    ctx.stroke()
}

// draw(, 'canvas')


var arr = [228, 264, 175, 54, 272, 298, 280, 19, 222, 224, 251, 174, 287, 183, 62, 285, 104, 279, 236, 282, 285, 48, 242, 70, 135, 290, 14, 76, 128, 178, 134, 287, 73, 9, 272, 277, 238, 251, 295, 159, 106, 246, 32, 92, 60, 25, 76, 163, 3, 244, 76, 220, 223, 18, 289, 289, 7, 3, 65, 66, 180, 130, 284, 184, 70, 256, 160, 8, 206, 155, 166, 244, 32, 130, 35, 91, 154, 43, 185, 89, 286, 261, 8, 140, 210, 296, 129, 148, 298, 125, 214, 109, 254, 197, 293, 24, 152, 84, 263, 290];
//var arr = [100,50,70]

var arr1 = arr;
var arr2 = arr.slice()

var generator = quickSort(arr1);
var generator2 = bubbleSort(arr2);

var timer = setInterval(function () {
    var a = generator.next();
    var b = generator2.next();

    draw(arr1, 'canvas');
    draw(arr2, 'canvas2');


    if (a.done && b.done) {
        console.log('done');
        clearInterval(timer)
    }
}, 10)


function * moo(num) {

    if (num > 1) {
        yield num;
        yield*moo(num - 1);
    }

}