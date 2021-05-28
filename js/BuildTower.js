function towerBuilder(nFloors) {
    let bottomSize = 1;
    for(let i = 1; i < nFloors; i++) {
        bottomSize += 2;
    }

    let tower = []
    for(let i = nFloors; i >= 1; i--) {
        tower.unshift(`${"*".repeat(bottomSize)}`)
        bottomSize -= 2;
    }

    return tower
}

towerBuilder(3)