function selectionSort(array){
	
	for( var i =0; i < array.length; i++){

			var min = i;

			for(var j = i+1; j< array.length; j++){

				if(array[j] < array[min]){
					min = j;
				}
			}

		swap(array, i, min);	
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
selectionSort(sortingArray);
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