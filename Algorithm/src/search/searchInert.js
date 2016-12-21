var searchInsert = function(inputArray, number){

    var start = 0, end = inputArray.length;

    while( start < end ){

        middle = start + Math.floor( (end - start)/2 );

        if( number > inputArray[ middle ] ){

            start = parseInt( middle + 1 );
        }else{

            end = parseInt( middle );
        }
    }

    return start;
};