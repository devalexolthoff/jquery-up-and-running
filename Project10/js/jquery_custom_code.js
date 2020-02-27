$(function () {
    $('#steps > li').css("color", "blue")
    $('#steps li:first, #nested-list li:first').css("color", "red")
    $("#steps li:nth-child(3)").css("border", "1px solid green");
    $("p[class]").css("border", "1px solid red");
    $("ul[id='steps']").hide();
    $("ul#steps + div").css("border", "1px dotted red")
    $("p[class!='instruct_title']")
    // Starts with
    $("[class^='imp'");
    // Ends With
    $("[class$='steps'");
    // includes, only perfect match
    $("[id='closing_statements'");
    //Includes this fragment 
    $("[id*='osing'");
    // any div that has a p
    $("div:has(p)");
    // h1 h2 ect
    $(":header");
    // Things that don't have something
    $("li:not('.important'");
    $("div:not(:has(:header))");

    // Jquery has lots of methods for dom manipulation. 
    // They can be looked up. I have generally concluded
    // that JQuery should be avoided when unecessary
});