function swap(arr, a, b, pivotIdx, animations){
    animations.push([pivotIdx,a,b])
    animations.push([pivotIdx,a,b])
    const temp = arr[a]
    animations.push([a,arr[b], b, temp])
    arr[a] = arr[b]
    arr[b] = temp

}

function partition(arr, left, right, animations){
    let pivotIdx = Math.floor((left + right )/ 2)
    let pivot = arr[pivotIdx]
    let i = left;
    let j = right;

    while(i <= j){
        while(arr[i] < pivot){
            animations.push([pivotIdx,i, i]);
            animations.push([pivotIdx,i, i]);
            i++;
        }
        while(arr[j] > pivot){
            animations.push([pivotIdx, j, j]);
            animations.push([pivotIdx, j, j]);
            j--;
        }
        if(i <= j){
            swap(arr, i, j,pivotIdx, animations);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right, animations) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right, animations);
        }
    }
    return animations;
}

export default quickSort;