function farmManagement(input) {
    let farmersCount = Number(input.shift());
    let team = {};

    for (let i = 0; i < farmersCount; i++) {
        let infoLine = input.shift();
        let [name, area, tasks] = infoLine.split(" ");

        team[name] = {
            area,
            tasks: tasks.split(",")
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let tokens = commandLine.split(" / ");
        let command = tokens[0];
        let farmerName = tokens[1];

        let selectedFarmer = team[farmerName];

        switch (command) {
            case "Execute":
                let workArea = tokens[2];
                let task = tokens[3];

                if (selectedFarmer.area === workArea && selectedFarmer.tasks.includes(task)) {
                    console.log(`${farmerName} has executed the task: ${task}!`);
                } else {
                    console.log(`${farmerName} cannot execute the task: ${task}.`);
                }
                break;

            case "Change Area":
                let newWorkArea = tokens[2];
                selectedFarmer.area = newWorkArea;
                console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);
                break;

            case "Learn Task":
                let newTask = tokens[2];

                if (selectedFarmer.tasks.includes(newTask)) {
                    console.log(`${farmerName} already knows how to perform ${newTask}.`);
                } else {
                    selectedFarmer.tasks.push(newTask);
                    console.log(`${farmerName} has learned a new task: ${newTask}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    Object.entries(team).forEach(entry => {
        let name = entry[0];
        let area = entry[1].area;
        let tasks = entry[1].tasks
            .sort((a, b) => a.localeCompare(b))
            .join(", ");
        console.log(`Farmer: ${name}, Area: ${area}, Tasks: ${tasks}`);
    })
}

farmManagement([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]);

farmManagement([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
]);