
// quick sort Optimiesed with three way function and median of 9
// three way function will prevent worst case happening for array with lots repetition
// It the array length N is less than 10, we will fall back to insertion sort ( 2ln(n) + ln(n)/3 >= n^2/2 , n >= 12)
var quickSortObj = (function(){

		function insertionSort(array, low, high){
	
			for(var i = low; i<= high; i++){

				for(var j=i; j>low && (array[j] < array[j- 1]); j--){

						swap(array, j, j-1);
				}
			}
		}

		function quickSort(array, low, high){

			if(low <= high){
				
				var nlength = high - low + 1;
				if(nlength < 10){

					insertionSort(array, low, high);
	            	return true;
				}

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

		function median9(array, lo, hi){
			// if N is bigger than 40
			var N = hi - lo + 1;	
			var eps = N/8;
            var mid = lo + N/2;
            var m1 = median3(array, lo, lo + eps, lo + eps + eps);
            var m2 = median3(array, mid - eps, mid, mid + eps);
            var m3 = median3(array, hi - eps - eps, hi - eps, hi); 
            var ninther = median3(array, m1, m2, m3);
            //swap(array, ninther, lo);
            return ninther;	
		}

		//This function will avoid dutch flag problem. Divide partition into three.
		//If there are a lot repeat value, it won't trigger worst case.
		function partitionMedian3(array, low, high){
			
			var lt = low, gt = high,  eq = low;;
			var nlength = high - low + 1;
			//when calculate the median number for partition we should calculate 
			//the length between high&low not the array length (full length)
			if(nlength <= 40){

				var pivotIndex = median3(array, low, Math.floor(low + (high - low)/2), high);	
			}else{

				var pivotIndex = median9(array, low, Math.floor(low + (high - low)/2), high);
			}
	
			swap(array, pivotIndex, high);

			var pivotal = array[high];
			
			while(eq <= gt){
				
				if ( array[eq] < pivotal ){
				
				 	swap(array, lt++, eq++);
				}else if ( array[eq] > pivotal ){
					
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
