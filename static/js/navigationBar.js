$(document).ready(function() {
  //when clicking on hamburger menu should open
  $(".menu-list").hide();
  var menuClosed = true;
  $("#navigationBarHamburger").on("click", function() {
    if (menuClosed) {
      $(this).attr("src", "img/cross.svg")
      $(".navigation-bar").css({
        "height": "100%"
      })
      $(".navigation-bar-list").css({
        "margin-left":"auto",
        "margin-right":"auto",
        "margin-top":"0px",
        "margin-bottom":"0px"
      })
      $(".menu-list").toggle()
      menuClosed = false;
    } else {
      $(this).attr("src", "img/hamburger.svg")
      $(".navigation-bar").css({
        "height": "50px"
      })
      $(".menu-list").toggle()
      menuClosed = true;
    }
  })

//when a menu item is hovered, it should change color
  $(".menu-list span").on("mouseenter",function () {
  $(this).css({
    "color":"#ADADAD",
    "cursor":"pointer"
  })
}).on("mouseleave", function(){
  $(this).css("color","white")
})


})
