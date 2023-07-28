let swap = (arr, a, b, animations) => {    
    let temp = arr[a];
    animations.push([a,arr[b], b, temp])
    arr[a] = arr[b];
    arr[b] = temp;
}

let bubbleSort = (inputArr) => {
    const animations = []
    let len = inputArr.length;
    let purple = true;
    let lastIdx = len - 1
    let swapped;
    for (let i = 0; i < len;i++){
        for (let i = 0; i < len; i++) {
            if(i < lastIdx){
                animations.push([i,i+1]);
                animations.push([i,i+1]);
            }
            if (inputArr[i] > inputArr[i + 1]) {
                // let tmp = inputArr[i];
                // inputArr[i] = inputArr[i + 1];
                // inputArr[i + 1] = tmp;
                // if(i  == len - 1){
                //     console.log(i)
                // }
                swap(inputArr, i, i+1, animations);
                swapped = true;
            }
        }
        lastIdx--;
        animations.push([])
    }
    return animations;
};

// let bubbleSort = (inputArr) => {
//     const animations = []
//     let len = inputArr.length;
//     let purple = true;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 // let tmp = inputArr[j];
//                 // inputArr[j] = inputArr[j + 1];
//                 // inputArr[j + 1] = tmp;
//                 swap(inputArr, j, j+1, animations)
//             }
//         }
//         animations[animations.length-1].push(purple)
//     }
//     return animations;
// };


export default bubbleSort;