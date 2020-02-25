// Adds an inline style
$("h4.boot").css("color", "red");

$("h4.boot").css({
  "color": "white",
  "background-color": "grey",
  "font-family": "arial, helvetica, sans-serif",
  "padding": "10px",
  "line-height": "2em",
  "text-align": "center"
});

// This refers to the DOM element
$("button").on("click", function () {
  $(this).addClass("beautify");
  $(this).on("dblclick", function () {
    $(this).addClass("blue_border");
  })
})

$("p").on("click", function () {
  $(this).css({
    "color": "white",
    "background-color": "grey",
    "font-family": "arial, helvetica, sans-serif",
    "padding": "10px",
    "line-height": "2em",
    "text-align": "center"
  })
})