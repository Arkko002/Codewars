function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let y = 0;
    let x = 0;
    walk.forEach(direction => {
        switch (direction) {
            case "n":
                x++;
                break;

            case "s":
                x--;
                break;

            case "e":
                y++;
                break;

            case "w":
                y--;
                break;
        }
    });

    return x === 0 && y === 0;
}

isValidWalk([ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ])