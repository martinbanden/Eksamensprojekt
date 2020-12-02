'use strict';

//---------------Send e-mail

$("#btnOps").on("click", function() {
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let forening = $("#forening").val().trim();

    if(name == "") {
        $("#errorMess").text("Tetx");
        return false;
    } 
    else if(phone == "") {
        $("#errorMess").text("Tetx");
        return false;
    } 
    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST', 
        cache: false,
        data: {'name': name, 'phone': phone },
        dataType: 'html',
        beforeSend: function() {
            $("#btnOps").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("false");
            else
                $("#mailForm").trigger("reset");
                
            $("#btnOps").prop("disabled", false);
        }
    });
})