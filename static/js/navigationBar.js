$(document).ready(function () {
$(".navigation-bar-list-item span").on("mouseenter",function () {
  $(this).css({
    "color":"#ADADAD",
    "cursor":"pointer"
  })
}).on("mouseleave", function(){
  $(this).css("color","white")
})
})
