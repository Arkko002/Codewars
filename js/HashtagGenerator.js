function generateHashtag (str) {
    str = str.trim();

    if (str.length <= 0) {
        return false;
    }

    let wordArr = str.split(" ");

    wordArr = wordArr.filter(str => str.trim() !== "");
    wordArr = wordArr.map(str =>  str.charAt(0).toUpperCase() + str.slice(1));

    result = "#" + wordArr.join("");

    if(result.length > 140) {
        return false;
    }

    return result;
}