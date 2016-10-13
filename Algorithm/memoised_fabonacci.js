
//memoised fibonacci
function fibonacci(n){

    var memoriArray = {};

    if(memoriArray[n]){

        return memoriArray[n];
    }else{

        var result = 0;

        if( n <= 2 ){

            result = 1;
        }else{

            result = fibonacci(n-1)+fibonacci(n-2);
        }

        memoriArray[n] = result;

        return result;
    }
}