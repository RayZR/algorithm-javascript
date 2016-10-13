/**
 * Created by ray on 13/10/2016.
 */

var chai   = require('chai');
var mergeSort = require('../src/sorting/mergeSort');
var assert = chai.assert;


    describe('mergeSort', function() {
        var sortingArray = [];
        before(function () {
            for(var i=0; i< 90; i++){
                sortingArray[i] =Math.floor((Math.random() * 500) + 1);
            }
        });

        it('The array should be sorted', function() {
            assert.equal( sortingArray.sort() , mergeSort(sortingArray) );
        });

    });
