$(document).ready(function () {
    $("#clear").click(function () {
        $('.clear').val('0');
    });

    //validate first 4 items 
    $("#btnGlue").click(function () {
        var valGlue = $("#tbGlue").val();
        if (valGlue.match(/^[0-9]$/)) {
            $("#tbGlue").css("background-color", "green");
        }
        else {
            alert("Enter a whole numeric value between 0 to 9 ");
            $("#tbGlue").css("background-color", "red");
        }
    });

    $("#btnPen").click(function () {
        var valGlue = $("#tbPen").val();
        if (valGlue.match(/^[0-9]$/)) {
            $("#tbPen").css("background-color", "green");
        }
        else {
            alert("Enter a whole numeric value between 0 to 9 ");
            $("#tbPen").css("background-color", "red");
        }
    });

    $("#btnPencase").click(function () {
        var valGlue = $("#tbPencase").val();
        if (valGlue.match(/^[0-9]$/)) {
            $("#tbPencase").css("background-color", "green");
        }
        else {
            alert("Enter a whole numeric value between 0 to 9 ");
            $("#tbPencase").css("background-color", "red");
        }
    });


    $("#btnEraser").click(function () {
        var valGlue = $("#tbEraser").val();
        if (valGlue.match(/^[0-9]$/)) {
            $("#tbEraser").css("background-color", "green");
        }
        else {
            alert("Enter a whole numeric value between 0 to 9 ");
            $("#tbEraser").css("background-color", "red");
        }
    });

    //8.4store values from first page to second page
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        $("#btnGlue").click(function () {

            var itemGlue = $("#tbGlue").val();
            localStorage.setItem('glue', itemGlue);

        });

        $("#btnPen").click(function () {

            var itemPen = $("#tbPen").val();
            localStorage.setItem('pen', itemPen);

        });

        $("#btnPencase").click(function () {

            var itemPencase = $("#tbPencase").val();
            localStorage.setItem('pencase', itemPencase);

        });

        $("#btnEraser").click(function () {

            var itemEraser = $("#tbEraser").val();
            localStorage.setItem('eraser', itemEraser);

        });
    } else {
        // Sorry! No Web Storage support..
        alert("Web storage not supported.")
    }
});












