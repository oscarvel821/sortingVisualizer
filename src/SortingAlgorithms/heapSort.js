const buildMaxHeap = (arr, animations) => {
    // Get index of the middle element
    let i = Math.floor(arr.length / 2 - 1);

    // Build a max heap out of
    // All array elements passed in
    while (i >= 0) {
      heapify(arr, i, arr.length, animations);
      i -= 1;
    }
}
  
const heapify = (heap, i, max, animations) => {
    let index;
    let leftChild;
    let rightChild;
  
    while (i < max) {
      index = i;
  
      // Get the left child index 
      // Using the known formula
      leftChild = 2 * i + 1;
      
      // Get the right child index 
      // Using the known formula
      rightChild = leftChild + 1;
  
      // If the left child is not last element 
      // And its value is bigger
      if (leftChild < max && heap[leftChild] > heap[index]) {
        //comparing two values so push to animations
        animations.push([index, leftChild]);
        //push again to inverse the color
        animations.push([index, leftChild]);
        index = leftChild;
      }
  
      // If the right child is not last element 
      // And its value is bigger
      if (rightChild < max && heap[rightChild] > heap[index]) {
        //comparing two values so push to animations
        animations.push([index, rightChild]);
        //push again to inverse the color
        animations.push([index, rightChild]);
        index = rightChild;
      }
  
      // If none of the above conditions is true
      // Just return
      if (index === i) {
        return;
      }
  
      // Else swap elements
      swap(heap, i, index, animations);
      // Continue by using the swapped index
      i = index;
    }
}
  
const swap = (arr, firstItemIndex, lastItemIndex, animations) => {
    const temp = arr[firstItemIndex];
    animations.push([firstItemIndex,arr[lastItemIndex], lastItemIndex, temp])
    // Swap first and last items in the array
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
}
  
const heapSort = (arr) => {
    //animations
    const animations = []
    // Build max heap
    buildMaxHeap(arr, animations);
  
    // Get the index of the last element
    let lastElement = arr.length - 1;
  
    // Continue heap sorting until we have
    // One element left
    while (lastElement > 0) {
      swap(arr, 0, lastElement, animations);
      heapify(arr, 0, lastElement, animations);
      animations.push([lastElement, arr[lastElement], true])
      lastElement -= 1;
    }
    
    //push first element in the sorted array
    animations.push([0,arr[0],true])
    // Return sorted array
    return animations;
}
  
export default heapSort;