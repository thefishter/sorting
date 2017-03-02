function split(wholeArray) {    

  /* your code here to define the firstHalf and secondHalf arrays */
// find middle index
var middle = Math.floor(wholeArray.length/2),
firstHalf = wholeArray.slice(0, middle),
secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arrOfArr){
    // takes an array of two arrays
    // loop through, compare values from each arr at the same index
    var arr1 = arrOfArr[0], arr2 = arrOfArr[1], i = 0, j = 0, output = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            output.push(arr1[i]);
            i ++;
        }
        else{
            output.push(arr2[j]);
            j ++;
        }
    }
    if(i === arr1.length)
        output.push(...arr2.slice(j));
    else if(j === arr2.length)
        output.push(...arr1.slice(i));        
    return output;
}

function mergeSort(arr){


    if(arr.length === 1) return arr;

    else{
        var arrOfArr = split(arr);
        return merge([mergeSort(arrOfArr[0]), mergeSort(arrOfArr[1])]);
        }
    }

