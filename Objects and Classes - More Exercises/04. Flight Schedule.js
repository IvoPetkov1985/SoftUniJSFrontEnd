function flightSchedule(input) {
    let flightEntries = input[0];

    let allFlights = {};

    for (let flightInfo of flightEntries) {
        let [flight, ...destination] = flightInfo.split(" ");

        let dest = {}
        dest.Destination = destination.join(" ");
        dest.Status = "Ready to fly";
        allFlights[flight] = dest;
    }

    let changedFlights = input[1];

    for (let statusLine of changedFlights) {
        let [flight, status] = statusLine.split(" ");

        if (allFlights.hasOwnProperty(flight)) {
            allFlights[flight].Status = status;
        }
    }

    let statusArray = input[2];
    let selectedStatus = statusArray[0];

    if (selectedStatus === "Cancelled") {
        let entries = Object.entries(allFlights).filter(e => e[1].Status === "Cancelled");
        entries.forEach(e => {
            console.log(e[1]);
        });
    } else {
        let entries = Object.entries(allFlights).filter(e => e[1].Status === "Ready to fly");
        entries.forEach(e => {
            console.log(e[1]);
        });
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);