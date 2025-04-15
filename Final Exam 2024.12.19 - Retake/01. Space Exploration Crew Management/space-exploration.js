function spaceExploration(input) {
    let astronautsCount = Number(input.shift());
    let crew = {};

    for (let i = 0; i < astronautsCount; i++) {
        let [name, section, skills] = input
            .shift()
            .split(" ");

        crew[name] = {
            section,
            skills: skills ? skills.split(",") : []
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let tokens = commandLine.split(" / ");
        let command = tokens[0];
        let name = tokens[1];
        let selectedAstronaut = crew[name];

        switch (command) {
            case "Perform":
                let section = tokens[2];
                let skill = tokens[3];

                if (selectedAstronaut.section === section && selectedAstronaut.skills.includes(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;

            case "Transfer":
                let newSection = tokens[2];
                selectedAstronaut.section = newSection;
                console.log(`${name} has been transferred to: ${newSection}`);
                break;

            case "Learn Skill":
                let newSkill = tokens[2];

                if (selectedAstronaut.skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    selectedAstronaut.skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (let name in crew) {
        let section = crew[name].section;
        let skills = crew[name].skills.sort((a, b) => a.localeCompare(b)).join(", ");
        console.log(`Astronaut: ${name}, Section: ${section}, Skills: ${skills}`);
    }
}

spaceExploration([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]);

spaceExploration([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"
]);