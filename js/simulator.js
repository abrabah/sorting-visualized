const sorting_algorithms = require('sorting-algorithms');
const data_sets = require('data-sets');


const canvas1 = document.getElementById('canvas-1');
const canvas2 = document.getElementById('canvas-2');

const select_sorting_1 = document.getElementById('select-sorting-1');
const select_sorting_2 = document.getElementById('select-sorting-2');

const select_swps = document.getElementById('select-swaps-per-second');
const select_data_set = document.getElementById('select-data-set');

const span_swaps1 = document.getElementById('span-swaps-1');
const span_swaps2 = document.getElementById('span-swaps-2');


function draw_array(arr, canvas) {
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

var simulator_interval = undefined;


module.exports = function () {

    clearInterval(simulator_interval);

    const dataset = data_sets[select_data_set.value];

    const arr1 = dataset.slice();
    const arr2 = dataset.slice();

    draw_array(arr1, canvas1);
    draw_array(arr2, canvas2);

    const alg1 = sorting_algorithms[select_sorting_1.value](arr1);
    const alg2 = sorting_algorithms[select_sorting_2.value](arr2);


    var swaps1 = 0;
    var swaps2 = 0;

    simulator_interval = setInterval(function () {
        var gen1 = alg1.next();
        var gen2 = alg2.next();
        draw_array(arr2, canvas2);


        if (gen1.done) {
            draw_array(arr1, canvas1);
        } else {
            draw_array(gen1.value, canvas1);
            swaps1++;
        }

        if (gen2.done) {
            draw_array(arr2, canvas2);
        } else {
            draw_array(gen2.value, canvas2);
            swaps2++;
        }

        span_swaps1.innerHTML = swaps1;
        span_swaps2.innerHTML = swaps2;


        if (gen1.done && gen2.done) {
            clearInterval(simulator_interval);
        }
    }, select_swps.value);


};
