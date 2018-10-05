const gradeCalc = function (score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Score and totalScore should be numbers')
    }

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

try {
    const result = gradeCalc(83, 'hundred');
    console.log(result);
} catch (e) {
    console.log(e)
}
