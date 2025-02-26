function roadRadar(speed, area) {
    let speedLimit = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    let diff = speed - speedLimit;
    let isInfraction = true;
    let status = "";

    if (diff <= 0) {
        isInfraction = false;
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        if (diff <= 20) {
            status = "speeding";
        } else if (diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
    }

    if (isInfraction) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

function solve(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let speedLimit = speedLimits[area];
    let difference = speed - speedLimit;
    let isInfracted = true;
    let status = "";

    if (difference <= 0) {
        isInfracted = false;
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

    if (isInfracted) {
        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');