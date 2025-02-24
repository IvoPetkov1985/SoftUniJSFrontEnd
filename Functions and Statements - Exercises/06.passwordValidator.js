function passwordValidator(password) {
    const startSmallLetterCode = 97;
    const endSmallLetterCode = 122;
    const startCapitalLetterCode = 65;
    const endCapitalLetterCode = 90;
    const startDigitCode = 48;
    const endDigitCode = 57;

    let isValid = true;

    if (!isLengthValid(password)) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isOnlyLettersAndDigits(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!isDigitCountValid(password)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }

    function isLengthValid(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isOnlyLettersAndDigits(password) {
        for (let ch of password) {
            if (!((ch.charCodeAt(0) >= startCapitalLetterCode && ch.charCodeAt(0) <= endCapitalLetterCode) ||
                (ch.charCodeAt(0) >= startSmallLetterCode && ch.charCodeAt(0) <= endSmallLetterCode) ||
                (ch.charCodeAt(0) >= startDigitCode && ch.charCodeAt(0) <= endDigitCode))) {
                return false;
            }
        }

        return true;
    }

    function isDigitCountValid(password) {
        let counter = 0;

        for (let char of password) {
            if (char.charCodeAt(0) >= startDigitCode && char.charCodeAt(0) <= endDigitCode) {
                counter++;
            }
        }

        return counter >= 2;
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

function solve(password) {
    const isLengthValid = p => p.length >= 6 && p.length <= 10;
    const isAlphaNumeric = p => /^[A-Za-z0-9]+$/.test(p);
    const containsAsLeastTwoDigits = p => p
        .split("")
        .filter(char => Number.isInteger(Number(char)))
        .length >= 2;

    let isPasswordValid = true;

    if (!isLengthValid(password)) {
        isPasswordValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isAlphaNumeric(password)) {
        isPasswordValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!containsAsLeastTwoDigits(password)) {
        isPasswordValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isPasswordValid) {
        console.log("Password is valid");
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');