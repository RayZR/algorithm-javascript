/**
 * Created by ray on 13/10/2016.
 */

var chai   = require('chai');
var mergeSort = require('../src/sorting/mergeSort');
var assert = chai.assert;


    describe('mergeSort', function() {
        var sortingArray = [];
        before(function () {
            for(var i=0; i< 20; i++){
                sortingArray[i] =Math.floor((Math.random() * 500) + 1);
            }
        });

        it('The array should be sorted', function() {

            var sortNumber = function(a, b){
                return a - b;
            };

            console.log(sortingArray);
            var inBuildSortedArray = sortingArray.slice(0).sort(sortNumber);
            var result = mergeSort.mergeSort(sortingArray, 0, sortingArray.length-1);
            assert.deepEqual( inBuildSortedArray,  result);
        });

    });
