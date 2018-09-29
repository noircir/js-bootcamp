const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100;
    console.log(percent);
    let letterGrade = '';

    if (percent < 60) {
        letterGrade = 'F';
    } else if (percent < 70) {
        letterGrade = 'D';
    } else if (percent < 80) {
        letterGrade = 'C';
    } else if (percent < 90) {
        letterGrade = 'B';
    } else {
        letterGrade = 'A';
    }
    return `You got a ${letterGrade} (${percent}%)`;
};

const result = gradeCalc(83, 100);
console.log(result);