//quick sort Optimiesed with median of three

var quickSortObj = (function(){

		function quickSort(array, low, high){

			if(low <= high){
				
				var pivot = partition(array, low, high);
				
				quickSort(array, low, pivot - 1 );
				quickSort(array, pivot + 1, high);	
			
			}
		}

		function swap(array, indexOne, indexTwo){
			
			var temp = array[indexOne];
			array[indexOne] = array[indexTwo];
			array[indexTwo] = temp;
		}

		function median3(array, i, j, k){
			
			 return (Math.min(array[i], array[j]) ?
		               (Math.min(array[j], array[k]) ? j : Math.min(array[i], array[k]) ? k : i) :
		               (Math.min(array[k], array[j]) ? j : Math.min(array[k], array[i]) ? k : i));
		}

		function partition(array, low, high){

			var pivotIndex = median3(array, low, Math.floor(low + (high - low)/2), high);
			
			swap(array, pivotIndex, high );
			
			var pivot = array[high];
				
			var counter = low;
			
			for(var j=low; j < high; j++){
				
				if( array[j] <= pivot){
					
					swap(array, j, counter);
					counter++;
				}
			}
			
			swap(array, counter, high);
			
			return counter;
		}

		return { quickSort: quickSort }
})();

// Test Case 
var sortingArray = [];
for(var i=0; i< 90; i++){
    sortingArray[i] =Math.floor((Math.random() * 500) + 1);
}
console.log(sortingArray);
quickSortObj.quickSort(sortingArray, 0, sortingArray.length-1);
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
