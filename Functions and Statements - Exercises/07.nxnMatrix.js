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

function solve2(num) {
    const line = new Array(num).fill(num).join(" ");
    return new Array(num).fill(line).join("\n");
}

console.log(solve2(5));
console.log(solve2(7));
console.log(solve2(2));