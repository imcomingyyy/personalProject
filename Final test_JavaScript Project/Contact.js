$(document).ready(function () {
    var clicked = false;
    $("div").hide();
    //choose shipping method: pickup or delivery
    $("#Delivery").click(function () {
        clicked = true;
        if (clicked == true) {
            $("div:last").show();

            $(function () {
                enable_cb();
                $("#Pickup").click(enable_cb);
            });

            function enable_cb() {
                if (this.checked) {
                    $("#Pickup").removeAttr("disabled");
                } else {
                    $("#Pickup").attr("disabled", true);
                }
            }
            //validate shipping address
            $("#submit").click(function () {
                var addresss = $("#address").val();

                if (addresss !== "") {
                    $("#address").css('background-color', 'green');
                }
                else {
                    alert("The shipping address should not leave blank");
                    $("#address").css('background-color', 'red');
                }
            });
        }
        else {
            $("div:last").hide();

            clicked == false;
        }
    });

    $("#Pickup").click(function () {
        clicked = true;
        if (clicked == true) {
            $("div:first").show();
            $(function () {
                enable_cb();
                $("#Delivery").click(enable_cb);
            });

            function enable_cb() {
                if (this.checked) {
                    $("#Delivery").removeAttr("disabled");
                } else {
                    $("#Delivery").attr("disabled", true);
                }
            }
        }
        else {
            $("div:first").hide();
            clicked == false;
        }
    });

    //validate contact information
    $("#submit").click(function () {
        var zipcode = $("#zipCode").val();
        var phoneNum = $("#phoneNum").val();
        var userName = $("#userName").val();

        //validate zip code
        if (zipcode.match(/^[0-9]{5}$/)) {
            $("#zipCode").css('background-color', 'green');

        }
        else {
            window.alert("Zip codes should be 5 digits required");
            $("#zipCode").css('background-color', 'red');
        }
        //validate phone number
        if (phoneNum.match(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/)) {
            $("#phoneNum").css('background-color', 'green');
        }
        else {
            alert("phone numbers should be 10 or 9 digits required");
            $("#phoneNum").css('background-color', 'red');

        }

        //validate name 

        if (userName.match(/^[a-zA-Z]+$/) && userName !== "") {
            $("#userName").css('background-color', 'green');
        }
        else {
            alert("A name cannot be number or other notations")
            $("#userName").css('background-color', 'red');
        }

    });

    //validate total, tax, grand tatal
    $("#calc").click(function () {
        var total = parseInt($("#calcGlue").val());
        total += parseInt($("#calcPen").val());
        total += parseInt($("#calcPencase").val());
        total += parseInt($("#calcEraser").val());
        $("#calcTotal").val(total);

        var fTotal = total * 1.07;
        // console.log(fTotal);
        $("#calcFtotal").val(fTotal);

        var tax = total * 0.07;
        $("#calctax").val(tax);
    });

    //store page val to next page 
    $("#btnGlue").click(function () {
        var glue = $("#tbGlue").val();
        $("#calcGlue").val(glue);
    });

    if (typeof (Storage) !== "undefined") {
        var getItemGlue = localStorage.getItem("glue");
        $("#calcGlue").val(getItemGlue);

        var getItemPen = localStorage.getItem("pen");
        $("#calcPen").val(getItemPen);

        var getItemPencase = localStorage.getItem("pencase");
        $("#calcPencase").val(getItemPencase);

        var getItemEraser = localStorage.getItem("eraser");
        $("#calcEraser").val(getItemEraser);
    }
    else {
        // Sorry! No Web Storage support.
        alert("Web storage not supported.")

    }

    //clear button
    $("#clear").click(function () {
        $(".btnClear").val("");
    });
});