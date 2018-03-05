function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;

}

Exam.prototype.getExamInfo = function() {
    return this.subject.getSubjectName() + " " + this.student.getStudentData();
}

Exam.prototype.hasPassed = function() {
    var passed = false;
    if (this.grade > 5) {
        passed = true;
    }
    return passed;

}