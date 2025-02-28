function excellentGrade(inputNumber) {
    let result = "";

    if (inputNumber >= 5.50) {
        result = "Excellent";
    } else {
        result = "Not excellent";
    }

    console.log(result);
}

excellentGrade(5.50);
excellentGrade(4.35);