var swaps;

function compare(arr, ind1, ind2) {
	if (arr[ind1] > arr[ind2])
		swap(arr, ind1, ind2);
}

function swap(arr, ind1, ind2) {
	// create temp storage
	// save arr[ind1] into temp
	var tmp = arr[ind1];
	// put arr[ind2] into arr[ind1]
	arr[ind1] = arr[ind2];
	// put temp into arr[ind2]
	arr[ind2] = tmp;
	swaps++;
   

}

function bubbleSort(arr) {
	var len = arr.length;
	do {
        console.log('Restarting sort');
		swaps = 0;
		// for the length of the array
		for (var i = 0; i < len-1; i++) {
			// compare first two elts
			console.log("compared", arr[i], arr[i + 1]);
            compare(arr, i, i+1);
             console.log("swaps: ", swaps);
			// swap if necessary, swaps++
			// increment elt indices
		}
    }while (swaps > 0)
	return arr;
}