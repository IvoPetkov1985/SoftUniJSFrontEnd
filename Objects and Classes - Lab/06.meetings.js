function meetings(arrayOfStrings) {
    let successfulMeetings = {};

    for (let meetingInfo of arrayOfStrings) {
        let [day, name] = meetingInfo.split(" ");

        if (!successfulMeetings.hasOwnProperty(day)) {
            successfulMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in successfulMeetings) {
        console.log(`${day} -> ${successfulMeetings[day]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);

function solve(arrayOfStrings) {
    let successfulMeetings = {};
    let arrayLength = arrayOfStrings.length;

    for (let i = 0; i < arrayLength; i++) {
        let meetingInfo = arrayOfStrings[i];
        let tokens = meetingInfo.split(" ");
        let dayOfWeek = tokens[0];
        let name = tokens[1];

        if (!successfulMeetings[dayOfWeek]) {
            successfulMeetings[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }

    let entries = Object.entries(successfulMeetings);

    for (let meeting of entries) {
        let day = meeting[0];
        let name = meeting[1];
        console.log(`${day} -> ${name}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);