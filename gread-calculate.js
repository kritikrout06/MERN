function gradeCalculate(n1) {
    if (n1 > 90) {
        console.log("Grade A");
    } else if (n1 >= 80 && n1 < 90) {
        console.log("Grade B");
    } else if (n1 >= 70 && n1 < 80) {
        console.log("Grade C");
    } else if (n1 >= 60 && n1 < 70) {
        console.log("Grade D");
    } else {
        console.log("Grade E");
    }
}
gradeCalculate(78);
gradeCalculate(98);
gradeCalculate(85);
gradeCalculate(65);
gradeCalculate(58);
gradeCalculate(95);
gradeCalculate(100);
