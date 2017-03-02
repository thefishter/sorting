function split(wholeArray) {    
    var middle = wholeArray.length / 2;
    return [wholeArray.slice(0, middle), wholeArray.slice(middle)];
}

function merge(arr1, arr2) {
    var output = [];
    var i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        }
        else {
            output.push(arr2[j]);
            j++;
        }
    }
    if (i === arr1.length) output.push(...arr2.slice(j));
    else if (j === arr2.length) output.push(...arr1.slice(i)); 
    // if (i === arr1.length)
    //     output = output.concat(arr2.slice(j));
    // else if (j === arr2.length)
    //     output = output.concat(arr1.slice(i));         
    return output;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]));
}

