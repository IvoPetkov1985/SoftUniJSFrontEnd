function solve(input) {
    let sprintersCount = Number(input.shift());
    let team = [];

    for (let i = 0; i < sprintersCount; i++) {
        let [name, taskId, title, status, estimantedPoints] = input.shift().split(":");
        let assignee = team.find(a => a.name === name);

        if (!assignee) {
            assignee = {
                name,
                tasks: []
            };

            team.push(assignee);
        }

        let task = { taskId, title, status, estimantedPoints: Number(estimantedPoints) };
        assignee.tasks.push(task);
    }

    for (let line of input) {
        let tokens = line.split(":");
        let command = tokens[0];
        let name = tokens[1];
        let selectedAssignee = team.find(a => a.name === name);

        if (command === "Add New") {
            if (!!selectedAssignee) {
                let taskId = tokens[2];
                let title = tokens[3];
                let status = tokens[4];
                let estimantedPoints = Number(tokens[5]);
                let newTask = { taskId, title, status, estimantedPoints };
                selectedAssignee.tasks.push(newTask);
            } else {
                console.log(`Assignee ${name} does not exist on the board!`);
            }
        } else if (command === "Change Status") {
            let taskId = tokens[2];
            let newStatus = tokens[3];

            if (!selectedAssignee) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else {
                let selectedTask = selectedAssignee.tasks.find(t => t.taskId === taskId);

                if (!selectedTask) {
                    console.log(`Task with ID ${taskId} does not exist for ${name}!`);
                } else {
                    selectedTask.status = newStatus;
                }
            }
        } else if (command === "Remove Task") {
            let index = Number(tokens[2]);

            if (!selectedAssignee) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else {
                if (index >= 0 && index < selectedAssignee.tasks.length) {
                    selectedAssignee.tasks.splice(index, 1);
                } else {
                    console.log("Index is out of range!");
                }
            }
        }
    }

    let todoPoints = 0;

    for (let assignee of team) {
        let toDoTasks = assignee.tasks.filter(t => t.status === "ToDo");
        todoPoints += toDoTasks.reduce((acc, x) => acc + x.estimantedPoints, 0);
    }

    console.log(`ToDo: ${todoPoints}pts`);

    let inProgressPoints = 0;

    for (let assignee of team) {
        let inProgressTasks = assignee.tasks.filter(t => t.status === "In Progress");
        inProgressPoints += inProgressTasks.reduce((acc, x) => acc + x.estimantedPoints, 0);
    }

    console.log(`In Progress: ${inProgressPoints}pts`);

    let codeReviewPoints = 0;

    for (let assignee of team) {
        let codeReviewTasks = assignee.tasks.filter(t => t.status === "Code Review");
        codeReviewPoints += codeReviewTasks.reduce((acc, x) => acc + x.estimantedPoints, 0);
    }

    console.log(`Code Review: ${codeReviewPoints}pts`);

    let donePoints = 0;

    for (let assignee of team) {
        let doneTasks = assignee.tasks.filter(t => t.status === "Done");
        donePoints += doneTasks.reduce((acc, x) => acc + x.estimantedPoints, 0);
    }

    console.log(`Done Points: ${donePoints}pts`);

    let pointsArray = [todoPoints, inProgressPoints, codeReviewPoints];
    let otherPointsSum = pointsArray.reduce((acc, x) => acc + x, 0);

    if (donePoints >= otherPointsSum) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]);