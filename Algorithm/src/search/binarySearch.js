var searchInsert = function(inputArray, number){

    var start = 0, end = inputArray.length;

    while( start <= end ){

        if( end <= 0 || start >= parseInt( inputArray.length - 1 ) ){

            if( number < inputArray[0]){

                return 0;
            }else if( number > inputArray[ inputArray.length - 1 ] ) {

                return inputArray.length;
            }
        }

        middle = start + Math.floor( (end - start)/2 );

        if( number > inputArray[ middle ] ){

            if( ( parseInt(  middle + 1 ) <= end  ) &&  ( number < inputArray[ parseInt( middle + 1 ) ] ) ){

                return middle + 1;
            }
            start = parseInt( middle + 1 );

        }else if( number < inputArray[  middle ] ){

            if( ( parseInt( middle - 1 ) >= start ) && ( number > inputArray[ parseInt( middle - 1 ) ]) ){

                return parseInt( middle  );
            }
            end = parseInt( start + end - middle -1 );

        }else{

            return middle;
        }
    }
};
//               0  1  2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23
var testArray = [1, 7, 14, 17, 18, 19, 19, 19, 20, 20, 21, 24, 28, 29, 31, 31, 32, 33, 35, 37, 40, 42, 44, 46];

console.log( "Array Length: " + testArray.length);

console.log( searchInsert(testArray, 23) + " ================================== 11" );
console.log( searchInsert(testArray, 24) + " ================================== 12" );
console.log( searchInsert(testArray, 27) + " ================================== 12" );
console.log( searchInsert(testArray, 36) + " ================================== 19" );
console.log( searchInsert(testArray, 31) + " ================================== 14 or 15" );
console.log( searchInsert(testArray, 47) + " ================================== 24" );
console.log( searchInsert(testArray, 0)  + " ================================== 0" );