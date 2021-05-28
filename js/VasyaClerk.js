function tickets(peopleInLine) {
    let clerk = new Map();
    clerk[25] = 0;
    clerk[50] = 0;
    clerk[100] = 0;

    let canSell = "YES";

    peopleInLine.forEach(personBill => {
        let change = personBill - 25
        clerk[personBill] += 1

        if (change === 0) {
            return;
        }

        if (change === 25) {
            if (clerk[25] >= 1) {
                clerk[25] -= 1;
                return;
            }

            canSell = "NO";
        }

        if (change === 75) {
            if (clerk[25] >= 1 && clerk[50] >= 1) {
                clerk[25] -= 1;
                clerk[50] -= 1;
                return;
            }

            if (clerk[25] >= 3) {
                clerk[25] -= 3;
                return;
            }


            canSell = "NO";
        }

    })

    return canSell;
}

tickets([25, 25, 25, 25, 50, 100, 50 ])