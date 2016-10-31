//quick sort Optimiesed with three way function and median of three
// three way function will prevent worst case happening for array with lots repetition
var quickSortObj = (function(){

		function quickSort(array, low, high){

			if(low <= high){
				
				var pivot = partitionMedian3(array, low, high);
				
				quickSort(array, low, pivot.lt - 1 );
				quickSort(array, pivot.gt + 1, high);	
			
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


		//This function will avoid dutch flag problem. Divide partition into three.
		//If there are a lot repeat value, it won't trigger worst case.
		function partitionMedian3(array, low, high){
			
			var lt = low, gt = high;

			//when calculate the median number for partition we should calculate 
			//the length between high&low not the array length (full length)
			var pivotalIndex = median3(array, low, Math.floor(low + (high - low)/2), high);

			swap(array, pivotalIndex, high);

			var pivotal = array[high];

			var eq = low;
			
			while(eq <= gt){
				
				if ( pivotal > array[eq] ){
				
				 	swap(array, lt++, eq++);
				}else if ( pivotal < array[eq] ){
					
					swap(array, eq, gt--);
				}else{
					
					eq++;
				}
			}
			
			return { lt:lt, gt:gt };
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
