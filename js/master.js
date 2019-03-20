$(document).ready(function(){
    $("#loader").fadeOut();
    $("#inputList").fadeIn();
});
var type, number;

$("#inputForm").submit(function(e){
    e.preventDefault();
    var value = $("#names").val();
    type = $("input[name='type']:checked").val();
    number = $("#numberValue").val();
    if(value.length){
        $("#names").removeClass('error');
        var splitResults = value.trim().split('\n');

        var results = [];
        for (var i = 0; i < splitResults.length; i++) {
            if(splitResults[i].length > 0){
                results.push(splitResults[i]);
            }
        }
    } else {
        $("#names").addClass('error');
    };

    console.log(number);
    if(!number){
        $("#numberValue").addClass('error');
    } else {
        $("#numberValue").removeClass('error');
    }

    if(value.length && number.length){
        $("#loader").fadeIn();
        $("#inputList").fadeOut();
    }
});
