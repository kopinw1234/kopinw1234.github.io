
$(document).ready(function() {
    var students=[];
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
                HairStyle: element.HairStyle,
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