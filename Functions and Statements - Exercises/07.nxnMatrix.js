function nxnMatrix(number) {
    let str = `${number} `;

    for (let i = 0; i < number; i++) {
        console.log(str.repeat(number));
    }
}

nxnMatrix(3);
nxnMatrix(7);

function solve(number) {
    for (let i = 0; i < number; i++) {
        let str = `${number} `;
        let line = "";

        for (let j = 0; j < number; j++) {
            line += str;
        }

        console.log(line);
    }
}

solve(4);
solve(2);