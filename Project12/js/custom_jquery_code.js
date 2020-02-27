$(function () {
    $("#books_div >.book").on("click", "button", function (e) {
        var price = $(this).closest(".book").data("price")
        var author = $(this).closest(".book").data("author")
        var details = $("<p> price: " + price + "<br> Author: <br>" + author + "<br> </p> + ")
        $(this).closest(".book").append(details)
        $(this).closest(".book").css({
            "background-color": "yellow"
        })
        $(this).remove()
        e.stopPropagation();
    });
    $("div.book").on('click', function () {
        alert("Click on see details to see the price of the book.")
    })
    $("#books_completed > .book").on("click", "button", function (e) {
        var date = $(this).closest(".book").data("purchased")
        var author = $(this).closest(".book").data("author")
        var rating = $(this).closest(".book").data("myrating")
        var details = $("<p> Purchased Date: " + date + "<br> Author: <br>" + author + "<br> Rating: " + rating + "<br> </p>")
        $(this).closest(".book").append(details)
        $(this).closest(".book").css({
            "background-color": "yellow"
        })
        $(this).remove()
        e.stopPropagation();
    })
});