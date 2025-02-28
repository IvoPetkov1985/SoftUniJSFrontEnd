function studentInformation(studentName, studentAge, averageGrade) {
    let student = {
        name: studentName,
        age: studentAge,
        grade: averageGrade
    };

    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade.toFixed(2)}`);
}

studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);