var binarySearch = function(inputArray, number){

    var start = 0, end = inputArray.length-1;

    while( start <= end ){

        middle = start + Math.floor( (end - start)/2 );

        if( end === 0){

            return 0;
        }else if( start === inputArray.length-1){

            return inputArray.length-1;
        }

        console.log( "start: " + start );
        console.log( "end: " + end );
        console.log( "middle: " + middle );

        if( number > inputArray[ middle ] ){

            console.log( "bigger" );
            console.log( "index: " + parseInt( middle ) );
            console.log( "value: " + parseInt( inputArray[ parseInt( middle ) ] ) );
            console.log( "index: " + parseInt( middle + 1  ) );
            console.log( "value: " + parseInt( inputArray[ parseInt( middle + 1 ) ] ) );

            if( ( parseInt(  middle + 1 ) < end  ) &&  ( number < inputArray[ parseInt( middle + 1 ) ] ) ){

                return middle;
            }
                start = parseInt( middle + 1 );
                console.log("new start: " + start);
        }else if( number < inputArray[  middle ] ){

            if( ( parseInt( middle - 1 ) >= start ) && ( number > inputArray[ parseInt( middle - 1 ) ]) ){

                return parseInt( middle - 1 );
            }
                end = parseInt( start + end - middle -1 );
                console.log("new end: " + end);
        }else{

            return middle;
        }
    }
};
//               0  1  2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23
var testArray = [1, 7, 14, 17, 18, 19, 19, 19, 20, 20, 21, 24, 28, 29, 31, 31, 32, 33, 35, 37, 40, 42, 44, 46];

console.log( "Array Length: " + testArray.length);

console.log( binarySearch(testArray, 23) + " ================================== 10" );
console.log( binarySearch(testArray, 24) + " ================================== 11" );
console.log( binarySearch(testArray, 27) + " ================================== 11" );
console.log( binarySearch(testArray, 36) + " ================================== 18" );
console.log( binarySearch(testArray, 31) + " ================================== 13 or 14" );
console.log( binarySearch(testArray, 47) + " ================================== 23" );
console.log( binarySearch(testArray, 0)  + " ================================== 0" );