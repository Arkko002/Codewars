function ArrayChallenge(arr) {
    let sandwiches = arr.shift();

    let personArr = [];
    for (let i = 0; i < arr.length; i++) {
        let person = {prevDiff: 0, index: i, hunger: arr[i], nextDiff: 0}

        if(i > 0) {
            person.prevDiff = Math.abs(arr[i] - arr[i - 1]);
        }

        if(i + 1 < arr.length - 1) {
            person.nextDiff = Math.abs(arr[i] - arr[i + 1])
        }

        personArr.push(person)
    }

    let totalDiff = CalculateTotalDiff(personArr);
    while (sandwiches !== 0) {

        let [diffIndex, isPrev] = FindMaxDiff(personArr);
        let person = personArr[diffIndex];

        if (isPrev) {
            if (person.hunger > personArr[diffIndex - 1].hunger) {
                person.prevDiff -= 1;
                person.hunger -= 1;
                sandwiches -= 1;
            } else {
                personArr[diffIndex - 1].nextDiff -= 1;
                personArr[diffIndex - 1].hunger -= 1;
                sandwiches -= 1;
            }
        } else {
            if (person.hunger > personArr[diffIndex + 1].hunger) {
                person.nextDiff -= 1;
                person.hunger -= 1;
                sandwiches -= 1;
            } else {
                personArr[diffIndex + 1].prevDiff -= 1;
                personArr[diffIndex + 1].hunger -= 1;
                sandwiches -= 1;
            }
        }

        let tempDiff = CalculateTotalDiff(personArr);
        if(tempDiff < totalDiff) {
            totalDiff = tempDiff;
        }
    }

    return totalDiff;
}

function FindMaxDiff(personArr) {
    let maxDiff = 0;
    let maxDiffIndex = 0;

    // Use this value to determine which direction the diff describes
    let isPrevDiff = true;

    personArr.forEach((person, index) => {
        if (person.prevDiff > maxDiff) {
            maxDiff = person.prevDiff;
            maxDiffIndex = index;
            isPrevDiff = true;
        }

        if (person.nextDiff > maxDiff) {
            maxDiff = person.nextDiff;
            maxDiffIndex = index;
            isPrevDiff = false;
        }
    });

    return [maxDiffIndex, isPrevDiff]
}

function CalculateTotalDiff(personArr) {
    let totalDiff = 0;
    personArr.forEach(person => {
        totalDiff += person.prevDiff + person.nextDiff;
    });

    return totalDiff;
}

// keep this function call here
console.log(ArrayChallenge([5, 2, 3, 4, 5]));