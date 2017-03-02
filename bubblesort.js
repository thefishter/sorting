var swaps;

function compare(arr, ind) {
	if (arr[ind] > arr[ind+1])
		swap(arr, ind, ind+1);
}

// change above to return bool, eliminate swaps var

function swap(arr, ind) {
	var tmp = arr[ind];
	arr[ind] = arr[ind+1];
	arr[ind+1] = tmp;
	swaps++;
}

function bubbleSort(arr) {
	var len = arr.length;
	do {
		swaps = 0;
		for (var i = 0, end = len; i < len-1; i++, end--) {
            compare(arr, i);
		}
    } while (swaps > 0)
	return arr;
}