function list(names){
    var namesStr = "";

    names.forEach((hash, index) => {
        namesStr += hash["name"]

        if(index === names.length - 2) {
            namesStr += " & "
        } else if(!(index === names.length - 1)) {
            namesStr += ", "
        }
    });

    return namesStr;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])