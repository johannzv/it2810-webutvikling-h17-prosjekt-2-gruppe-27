$(document).ready(function() {
    var menuClosed = true;
  //when clicking on hamburger menu should open
  shouldChangeLayout();
  function shouldChangeLayout() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      console.log("called");
      if(!menuClosed){
        $("#navigationBarLiHamburger").hide();
        $(".navigation-bar").css({
          "height": "50px"
        })

        menuClosed = true;
      }
      $("#navigationBarLiHamburger").hide();
      $(".menu-list").show();
      $("#menuList").addClass("navigation-bar-list").removeClass("menu-list")

      // do functionality on screens smaller than 768px
    } else {
      $("#menuList").removeClass("navigation-bar-list").addClass("menu-list")
      $("#navigationBarHamburger").attr("src", "img/hamburger.svg");
      $("#navigationBarLiHamburger").show();
      $(".menu-list").hide();
      $(".navigation-bar").css({
        "height": "50px"
      });
      menuClosed=true;

    }
  }
$( window ).resize(function() {shouldChangeLayout();})



  $("#navigationBarHamburger").on("click", function() {
    if (menuClosed) {
      $(this).attr("src", "img/cross.svg")
      $(".navigation-bar").css({
        "height": "100%"
      })
      $(".navigation-bar-list").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-top": "0px",
        "margin-bottom": "0px"
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
  $("#menuList span").on("mouseenter", function() {
    $(this).css({
      "color": "#ADADAD",
      "cursor": "pointer"
    })
  }).on("mouseleave", function() {
    $(this).css("color", "white")
  })

  $("#navigationBarHamburger, #homeLogo").on("mouseenter", function() {
    $(this).css({
      "cursor": "pointer"
    })
  })

})