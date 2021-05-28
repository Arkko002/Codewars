function printerError(s) {
    let errorCount = 0;

    [...s].forEach(char => {
        let code = char.charCodeAt(0);

        if(code < 97 || code > 109) {
            errorCount++;
        }
    })

    return `${errorCount}/${s.length}`
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")