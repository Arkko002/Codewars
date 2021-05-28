var number = function (busStops) {
    var peopleInBus = 0;

    busStops.forEach(stop => {
       peopleInBus += stop[0];
       peopleInBus -= stop[1]
    });

    return peopleInBus;
}