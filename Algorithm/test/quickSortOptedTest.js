/**
 * Created by ray on 13/10/2016.
 */

var chai   = require('chai');
var quickSortOpted = require('../src/sorting/quickSortOpted');
var assert = chai.assert;

    describe('quickSortOpted', function() {
        var sortingArray = [];
        before(function () {
            for(var i=0; i< 90; i++){
                sortingArray[i] = Math.floor((Math.random() * 500) + 1);
            }
        });

        it('The array should be sorted', function() {

            var sortNumber = function(a, b){
                  return a - b;
            };

            assert.deepEqual( sortingArray.slice(0).sort(sortNumber), quickSortOpted.quickSort(sortingArray, 0, sortingArray.length-1) );
        });

    });
