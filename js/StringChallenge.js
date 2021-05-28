function StringChallenge(str) {
    let timeStrArr = str.split("-");

    let timeArr = []
    timeStrArr.forEach(timeStr => {
       let [hour, minutes] = timeStr.split(":")
       let period = minutes.match(/[a-zA-Z]{2}/)[0];
        minutes = minutes.replace(/[a-zA-Z]{2}/, "");

        let hourNum = parseInt(hour);
        let minutesNum = parseInt(minutes);
        if (period === "pm") {
            if (hourNum < 12) {
                hourNum += 12;
            }
        }

        if (period === "am") {
            if (hourNum === 12) {
                hourNum -= 12;
            }
        }

       let time = new Date();
       time.setHours(hourNum);
       time.setMinutes(minutesNum)
        timeArr.push(time);
    });



    var diff = (timeArr[0].getTime() - timeArr[1].getTime()) / 1000;
    diff /= 60;
    // code goes here
    return Math.abs(Math.round(diff));

}
// keep this function call here
console.log(StringChallenge("12:30pm-12:00am"));