var list = [];


var dataCollect = function() {
    return {


        subject: document.querySelector(".add-subject").value,
        student: document.querySelector(".add-student-name").value,
        grade: document.querySelector(".add-grade").value
    }




};

var validateData = function() {

    if (parseInt(list[list.length - 1].grade) > 10 || parseInt(list[list.length - 1].grade) < 5) {
        return alert("Please select a grade between 5 and 10!");
    }


}

var updateList = function() {
    list.push(dataCollect());

}

var updatePage = function() {

    var list1 = document.querySelector('passed-list').innerHTML;
    var list1failed = document.querySelector('failed-list').innerHTML;
    var passedCount = document.querySelector(".exam-passed-count").textContent;


    if (parseInt(list[list.length - 1].grade) > 5) {
        list1 += "<p>" + list[list.length - 1].subject + " " + list[list.length - 1].student + " " + list[list.length - 1].grade + "</p>";
        passedCount = parseInt(passedCount) + 1;
        document.querySelector(".exam-passed-count").textContent = passedCount;
    } else {
        list1failed += "<p>" + list[list.length - 1].subject + " " + list[list.length - 1].student + " " + list[list.length - 1].grade + "</p>";


    }

}