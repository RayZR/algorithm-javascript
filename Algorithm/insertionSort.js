function insertionSort(array){
	
	for(var i = 0; i <= array.length-1; i ++){

		for(var j = i; j > 0 && ( array[j] < array[j- 1] ); j--){

				swap(array, j, j - 1);
		}

	}

}

// This insertion sort variantion only doe half exchange, only exchange when found position j
function insertionSortX(array){

	var N = array.length;

	var exchanges = 0;

	for (var i = N-1; i > 0; i--) {

            if ( array[i] < array[i-1] ) {

                swap(array, i, i - 1);
                exchanges++;
            }
        }

    if (exchanges == 0) return;
    
     for (var i = 2; i < N; i++) {
     		var v = array[i];
            var j = i;
            while ( v < array[j-1] ) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = v;
        }
}

function swap(array, indexOne, indexTwo){
			
			var temp = array[indexOne];
			array[indexOne] = array[indexTwo];
			array[indexTwo] = temp;
}

// Test Case 
var sortingArray = [];
for(var i=0; i< 90; i++){
    sortingArray[i] =Math.floor((Math.random() * 500) + 1);
}
console.log(sortingArray);
insertionSort(sortingArray);
console.log(sortingArray);

var sorted = true;
for(var j=1; j<90;j++){

	if(sortingArray[j] < sortingArray[j-1]){
		
		var sorted = false;
	}
}

if(sorted == false){

	console.warn("array not sorted");
}else{

	console.info("array sorted");
}