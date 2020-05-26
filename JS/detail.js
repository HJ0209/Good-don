$(function() {
    $("#Period_Direct").hide();


    var repeat;
    $("#period").change(function(){
        console.log("change");
        if($("#period").val() == "direct") {
            console.log("show");
            
            $("#Period_Direct").show();
        } else {
            console.log("hide");
            $("#Period_Direct").hide();
        }
    })
});

$(function () {
    $('#period').change(function() {
        console.log(this.value);
    });

    $('#Button_NewList').click(function() {
        console.log($('#period').val());
        if ($('#period').val() == "") {
            alert("입력하세요");
            return;
        } else {
            location.href = "Congratulations.html";
        }
    });
});