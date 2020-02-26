$(function () {
    $('#steps > li').css("color", "blue")
    $('#steps li:first, #nested-list li:first').css("color", "red")
    $("#steps li:nth-child(3)").css("border", "1px solid green");
    $("p[class]").css("border", "1px solid red");
    $("ul[id='steps']").hide()
});