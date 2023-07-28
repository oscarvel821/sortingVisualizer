function getMergeSortAnimation(array){
    const animation = []
    if(array.length <= 1) {
        return array
    }
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animation);
    return animation
};

function mergeSortHelper(mainArray,startIdx,endIdx, auxiliaryArray, animation){
    if(startIdx === endIdx) {
        return
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animation);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animation);
    doMerge(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx, animation)
}

function doMerge(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx, animation){
    let i = startIdx;
    let j = middleIdx + 1;
    let k = startIdx;

    while(i <= middleIdx && j <= endIdx){
        //comparing the two values and pushing to the animation array
        animation.push([i, j]);
        //pushing to the animation array again to inverse the color
        animation.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            //overwriting the value and pushing to the animation array
            animation.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++]
        }
        else{
            //overwriting the value and pushing to the animation array
            animation.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++]
        }
    }

    while(i <= middleIdx){
        //comparing the two values and pushing to the animation array
        animation.push([i,i]);
        //pushing to the animation array again to inverse the color
        animation.push([i,i]);
        //overwriting the value in the main array and pushing to the animation array
        animation.push([k, auxiliaryArray[i]])
        mainArray[k++] = auxiliaryArray[i++]
    }
    while(j <= endIdx){
        //comparing the two values and pushing to the animation array
        animation.push([j,j]);
        //pushing to the animation array again to inverse the color
        animation.push([j,j]);
        //overwriting the value in the main array and pushing to the animation array
        animation.push([k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++]
    }


}

export default getMergeSortAnimation;

