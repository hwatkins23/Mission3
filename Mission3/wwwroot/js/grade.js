// this function gathers the information from the form and displays the grade
$("#calculate").click(function () {
    // gather the form information
    let assignment = parseFloat($("#assignment").val());
    let groupProject = parseFloat($("#groupProject").val());
    let exam = parseFloat($("#exam").val());
    let quiz = parseFloat($("#quiz").val());
    let intex = parseFloat($("#intex").val());
    // calculate the grade percentage
    let totalGrade = ((assignment * 0.55) + (groupProject * 0.05) + (exam * 0.20) + (quiz * 0.10) + (intex * 0.10));
    let letterGrade;
    // determines the letter grade based on grade percentage
    if (totalGrade >= 94) {
        letterGrade = "A"
    }
    else if (totalGrade >= 90) {
        letterGrade = "A-"
    }
    else if (totalGrade >= 87) {
        letterGrade = "B+"
    }
    else if (totalGrade >= 84) {
        letterGrade = "B"
    }
    else if (totalGrade >= 80) {
        letterGrade = "B-"
    }
    else if (totalGrade >= 77) {
        letterGrade = "C+"
    }
    else if (totalGrade >= 74) {
        letterGrade = "C"
    }
    else if (totalGrade >= 70) {
        letterGrade = "C-"
    }
    else if (totalGrade >= 67) {
        letterGrade = "D+"
    }
    else if (totalGrade >= 64) {
        letterGrade = "D"
    }
    else if (totalGrade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }
    // outputs the letter and grade percentage
    alert("Your grade is: " + letterGrade + " " + totalGrade + "%");
})
