require('../scss/makeitshine.scss');
import  algorithms from  'sorting-algorithms';
import data_sets from 'data-sets'

function add_sorting_algorithms_to_selection_tags() {
    var algorithm_selectors = document.getElementsByClassName('select-sorting');



    for (var i = 0; i < algorithm_selectors.length; i++) {

        for (var key in algorithms) {
            var opt = document.createElement('option');
            opt.value = key;
            opt.innerHTML = key;
            algorithm_selectors[i].appendChild(opt);
        }
    }
}


function add_data_sets_to_selection_tag() {
    var selection_data_set = document.getElementById('select-data-set');

    for (var key in data_sets) {
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        selection_data_set.appendChild(opt);
    }

    selection_data_set.change = function (evt) {
        console.log('peep');
    }


}


window.onload = function () {
    add_sorting_algorithms_to_selection_tags();
    add_data_sets_to_selection_tag();

    const simulator_func = require('simulator')();

    document.getElementById('btn-start').onclick = function () {
        simulator_func();
    };

};