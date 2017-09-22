$(".twitter-buttons").on("mouseenter", function() {
  $(this).css({
    "background-color": "#ADADAD",
    "cursor": "pointer"
  })
}).on("mouseleave", function() {
  $(this).css("background-color", "white")
})
