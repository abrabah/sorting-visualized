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


function reset() {
    clearInterval(simulator_interval);
    draw_array(data_sets[select_data_set.value], canvas1);
    draw_array(data_sets[select_data_set.value], canvas2);
    span_swaps1.innerHTML = 0;
    span_swaps2.innerHTML = 0;
}


function start_simulation() {
    reset();

    const dataset = data_sets[select_data_set.value];

    const arr1 = dataset.slice();
    const arr2 = dataset.slice();

    draw_array(arr1, canvas1);
    draw_array(arr2, canvas2);

    const alg1 = sorting_algorithms[select_sorting_1.value](arr1);
    const alg2 = sorting_algorithms[select_sorting_2.value](arr2);


    var swaps = 0;

    function do_sort_step() {
        var gen1 = alg1.next();
        var gen2 = alg2.next();
        swaps++;

        if (gen1.done) {
            draw_array(arr1, canvas1);
        } else {
            draw_array(gen1.value, canvas1);
            span_swaps1.innerHTML = swaps;
        }

        if (gen2.done) {
            draw_array(arr2, canvas2);
        } else {
            draw_array(gen2.value, canvas2);
            span_swaps2.innerHTML = swaps;
        }


        if (!(gen1.done && gen2.done)) {
            simulator_interval = setTimeout(do_sort_step, select_swps.value);
        }
    }

    do_sort_step();
}


module.exports = function () {
    reset();
    select_data_set.onchange = function () {
        clearInterval(simulator_interval);
        reset();
    };
    return start_simulation;
};
