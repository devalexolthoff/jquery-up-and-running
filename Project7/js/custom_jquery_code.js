let finalInput = $("input#amount_1")
$("button").on("click", function () {
    let item = $("input#itm_1").val();
    let total = parseInt($("input#quant_1").val()) * parseInt($("input#rate_1").val());
    finalInput.val(total)
    finalInput.removeAttr("id");
    $("h2#output").text(`${item} 10 times is worth ${total} dollars.`);
});