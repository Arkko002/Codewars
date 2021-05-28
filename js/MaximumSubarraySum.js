var maxSequence = function(arr){
    const temp = {start: 0, sum: 0 };
    let result = { start: 0, end: 0, sum: 0};

    for(let i = 0; i < arr.length; i++) {
        temp.sum += arr[i];

        if(temp.sum > result.sum) {
            result = { start:  temp.start, end: i, sum: temp.sum}
        }

        if(temp.sum < 0) {
            temp.sum = 0;
            temp.start = i + 1;
        }
    }

    return result.sum;
}

maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ])