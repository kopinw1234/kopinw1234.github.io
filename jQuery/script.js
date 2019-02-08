
$(document).ready(function() {
    var students=[];
    var tempStudents=[];
    $.ajax({
        url: "student.json",
        dataType: "json" 
    }).done(function(response){
        response.forEach(element => {
            var word = "";
            var student ={
                ID: element.ID,
                Name: element.Name,
                Gender: element.Gender,
                Class: element.Class,
                Seat: element.Seat,
                Club: element.Club,
                BreastSize: element.BreastSize,
                HairStyle: element.Hairstyle,
                Color: element.Color,
                Eye: element.Eyes,
                EyeType: element.EyeType,
                Info: element.Info
            };
            students.push(student);
            var word = "<tr><td>"+student.ID+"</td><td>"+student.Name+"</td><td>"+student.Gender+"</td><td>"+
            student.Class+"</td><td>"+student.Seat+"</td><td>"+student.Club+"</td><td>"+
            student.BreastSize+"</td><td>"+student.HairStyle+"</td><td>"+student.Color+"</td><td>"+
            student.Eye+"</td><td>"+student.EyeType+"</td><td>"+student.Info+"</td><tr>";
            $("#tableBody").append(word);
        });
        
    });
    $("#AdvSearchButton").click(function() {
        $("#inputAll").val("");
        $("#advSearchAll").show();
        $("#simpleSearchAll").hide();
    });
    $("#simpleSearchButton").click(function() {
        $("#simpleSearchAll").show();
        $("#advSearchAll").hide();
    });
    $("#searchButton").click(function() {
        setHeadTable();
        tempStudents = [];
        if ($("#inputAll").val() != "") {
            students.forEach(element => {
                $.each(element,function(i,val){
                    if ((val.toLowerCase()).includes($("#inputAll").val().toLowerCase())) {
                        tempStudents.push(element);
                        return false;
                    } 
                });
            });
            setTable(tempStudents);
        }
        else{
            setTable(students);
        }
    });
    // $('#submit-btn').click(function() {
    //     console.log('click on submit button');
    // });

    // $.ajax({
    //     url: "data.json",
    //     dataType: "json"
    // }).done(function(response) {
    //     console.log(response);
    //     response.forEach(element => {
    //         console.log(element.name, element.age);
    //     });
    // });

});
function setTable(array) {
    array.forEach(element => {
        var wordTable = "<tr><td>"+element.ID+"</td><td>"+element.Name+"</td><td>"+element.Gender+"</td><td>"+
            element.Class+"</td><td>"+element.Seat+"</td><td>"+element.Club+"</td><td>"+
            element.BreastSize+"</td><td>"+element.HairStyle+"</td><td>"+element.Color+"</td><td>"+
            element.Eye+"</td><td>"+element.EyeType+"</td><td>"+element.Info+"</td><tr>";
            $("#tableBody").append(wordTable);
        });
  
}
function setHeadTable(){
    $("#tableBody").empty();
    $("#tableBody").append("<tr><th>ID</th><th>Name</th><th>Gender</th><th>Class</th><th>Seat</th><th>Club</th><th>BreastSize</th><th>HairStyle</th><th>Color</th><th>Eye</th><th>EyeType</th><th>Info</th></tr>");
}