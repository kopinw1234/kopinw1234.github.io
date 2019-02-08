
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
            if (student.Gender =="0"){
                student.Gender="Female";
            }else{
                student.Gender="Male";
            }
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

    $("#searchAdvStyleButton").click(function() {
        tempStudents = [];
        if (!$.isNumeric($("#minID").val()) || !$.isNumeric($("#minClass").val()) || !$.isNumeric($("#minSeat").val()) || !$.isNumeric($("#minClub").val()) ||!$.isNumeric($("#minBS").val()) || !$.isNumeric($("#minHS").val()) ||
        !$.isNumeric($("#maxID").val()) || !$.isNumeric($("#maxClass").val()) || !$.isNumeric($("#maxSeat").val()) || !$.isNumeric($("#maxClub").val()) || !$.isNumeric($("#maxBS").val()) || !$.isNumeric($("#maxHS").val())){
            alert("Please Insert Number");
        }else{
            setHeadTable();
            students.forEach(element => {
                if (!(parseInt($("#minID").val()) <= parseInt(element.ID) && parseInt(element.ID) <= parseInt($("#maxID").val()))) {
                    return;
                }
                if (!(element.Name.toLowerCase()).includes($("#Name").val().toLowerCase())) {
                    if($("#Name").val().toLowerCase()!=""){
                        return;                    
                    }
                }
                if (element.Gender.toLowerCase() != $("select#genderSelector").find(":selected").val()) {
                    if ($("select#genderSelector").find(":selected").val()!="all"){
                        return; 
                    }
                    
                }
                if (!(parseInt($("#minClass").val()) <= parseInt(element.Class) && parseInt(element.Class) <= parseInt($("#maxClass").val()))) {
                    return;
                }
                if (!(parseInt($("#minSeat").val()) <= parseInt(element.Seat) && parseInt(element.Seat) <= parseInt($("#maxSeat").val()))) {
                    return;
                }
                if (!(parseInt($("#minClub").val()) <= parseInt(element.Club) && parseInt(element.Club) <= parseInt($("#maxClub").val()))) {
                    return;
                }
                if (!(parseInt($("#minBS").val()) <= parseInt(element.BreastSize) && parseInt(element.BreastSize) <= parseInt($("#maxBS").val()))) {
                    return;
                }
                if (!(parseInt($("#minHS").val()) <= parseInt(element.HairStyle) && parseInt(element.HairStyle) <= parseInt($("#maxHS").val()))) {
                    return;
                }
                if (!element.Color.toLowerCase().includes($("select#colorSelector").find(":selected").val())) {
                    if ($("select#colorSelector").find(":selected").val()!="all"){
                        return; 
                    } 
                }
                if (!element.Eye.toLowerCase().includes($("select#eyeSelector").find(":selected").val())) {
                    if ($("select#eyeSelector").find(":selected").val()!="all"){
                        return; 
                    }
                }
                if (!element.EyeType.toLowerCase().includes($("select#eyeTypeSelector").find(":selected").val())) {
                    if ($("select#eyeTypeSelector").find(":selected").val()!="all"){
                        return; 
                    }
                }
                if (!(element.Info.toLowerCase()).includes($("#Info").val().toLowerCase())) {
                    if($("#Info").val().toLowerCase()!=""){
                        return;                    
                    }                   
                }
                tempStudents.push(element);
            });
            console.log(tempStudents.length)
            console.log(students.length)
            setTable(tempStudents);
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