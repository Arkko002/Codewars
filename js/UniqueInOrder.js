var uniqueInOrder=function(iterable){
    let res = []
    for (var i = 0; i < iterable.length; i++) {
        if (i === 0) {
            res.push(iterable[i])
            continue;
        }

        if (res[res.length - 1] === iterable[i]) {
            continue;
        }

        res.push(iterable[i]);
    }

    return res;
};

let asd = uniqueInOrder('AAAABBBCCDAABBB')