
// quick sort Optimiesed with three way function and median of 9
// three way function will prevent worst case happening for array with lots repetition
// It the array length N is less than 10, we will fall back to insertion sort ( 2ln(n) + ln(n)/3 >= n^2/2 , n >= 12)
var quickSortObj = (function(){

	var insertionSort =	function(array, low, high){
	
			for(var i = low; i<= high; i++){

				for(var j=i; j>low && (array[j] < array[j- 1]); j--){

						swap(array, j, j-1);
				}
			}
		}

	var quickSort =	function(array, low, high){

			if( low <= high  ){
				
				//console.log('low: '+ low + 'hight: '+ high);

				var nlength = high - low + 1;
				if(nlength < 10){

					insertionSort(array, low, high);
	            	return true;
				}

				var pivot = partitionBMSec(array, low, high);
				
				quickSort(array, low, pivot.lt  );
				quickSort(array, pivot.gt, high );	
			
			}
		}

	var swap = function(array, indexOne, indexTwo){
			
			var temp = array[indexOne];
			array[indexOne] = array[indexTwo];
			array[indexTwo] = temp;
		}

	var median3 = function(array, i, j, k){
			
			 return (Math.min(array[i], array[j]) ?
		               (Math.min(array[j], array[k]) ? j : Math.min(array[i], array[k]) ? k : i) :
		               (Math.min(array[k], array[j]) ? j : Math.min(array[k], array[i]) ? k : i));
		}

	var median9 = function(array, lo, hi){
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
		//This is the efficient Bentley-McIlroy 3-way partitioning
		// http://www.sorting-algorithms.com/static/QuicksortIsOptimal.pdf
	var partitionBMSec = function(array, low, high){

			var lt = low, gt = high+1, eql = low, eqr = high+1;

			//console.log('gt:'+ gt + ', lt: ' + lt)

			var nlength = high - low + 1;
			//when calculate the median number for partition we should calculate 
			//the length between high&low not the array length (full length)
			if(nlength <= 40){

				var pivotIndex = median3(array, low, Math.floor(low + (high - low)/2), high);	
			}else{

				var pivotIndex = median9(array, low, Math.floor(low + (high - low)/2), high);
			}
	
			swap(array, pivotIndex, low);

			var pivotal = array[low];
			
			while(true){

				while(array[++lt] < pivotal){
					if(lt === high){
						break;
					}	
				};

				while(array[--gt] > pivotal ){
					if(gt === low){
						break;
					}	
				}

				if( lt === gt && array[lt] === pivotal){

					swap(array, ++eql, lt);
				}
				
				if( lt >= gt ) break;
	
				swap(array, lt, gt);

				if(array[lt] === pivotal ){
					
					swap(array, ++eql ,lt);
				}	

				if(array[gt] === pivotal ){

					swap(array, --eqr, gt);	
				}
			}
			//console.log('eql:'+ eql + ', lt: ' + lt);
			//console.log('gt:'+ gt + ', lt: ' + lt)

			lt = gt + 1;

			for(var k = low; k <= eql; k++){

				swap(array, k, gt--);
			}

			//console.log('high:'+ high + ', low: ' + low);
			//console.log('eqr:'+ eqr + ', gt: ' + gt);
			for(var k = high; k >= eqr; k--){

				swap(array, k, lt++);
			}
			
			return { lt:gt, gt:lt };
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
		console.log('position: '+ j + ', value: '+ sortingArray[j]);
	}
}

if(sorted == false){

	console.warn("array not sorted");
}else{

	console.info("array sorted");
}
