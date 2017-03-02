var swaps;

function compare(arr, ind1, ind2) {
	if (arr[ind1] > arr[ind2])
		swap(arr, ind1, ind2);
}

function swap(arr, ind1, ind2) {
	var tmp = arr[ind1];
	arr[ind1] = arr[ind2];
	arr[ind2] = tmp;
	swaps++;
}

function bubbleSort(arr) {
	var len = arr.length;
	do {
		swaps = 0;
		for (var i = 0; i < len-1; i++) {
            compare(arr, i, i+1);
		}
    } while (swaps > 0)
	return arr;
}