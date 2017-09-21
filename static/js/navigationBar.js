$(document).ready(function() {
  //checking if it is mobile
  var mobileApplied = false;
  shouldChangeNavbar();

  function isMobileWidth() {
    return $('#mobile').is(':visible')
  }
  $(".navigation-bar-list-item span").on("mouseenter", function() {
    $(this).css({
      "color": "#ADADAD",
      "cursor": "pointer"
    })
  }).on("mouseleave", function() {
    $(this).css("color", "white")
  })

  //window can shrink, checking if the window is to small to fit desktop version
  $(window).resize(function() {
    shouldChangeNavbar()
  });

  function shouldChangeNavbar() {
    if (isMobileWidth()) {
      if (mobileApplied) {
        return;
      }
      applyMobile()
    } else {
      applyDesktop();
    }
  }

  function applyMobile() {
    //$(".navigation-bar-list-item").hide();
    $("#nav-bar").removeClass("navigation-bar-desktop").addClass("navigation-bar-mobile");
    $("#nav-bar-list").addClass("navigation-bar-list-mobile").removeClass("navigation-bar-list");
    $("#nav-bar-list > li.navigation-bar-list-item").addClass("navigation-bar-list-item-mobile").removeClass("navigation-bar-list-item");

    mobileApplied = true;
  }

  function applyDesktop() {
    $(".navigation-bar-list-item").show();
    $(".navigation-bar-list-item-menu").toggle();
    $("#nav-bar").addClass("navigation-bar-desktop").removeClass("navigation-bar-mobile");

    mobileApplied = false;
  }

})
