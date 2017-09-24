$("#menuItemTwitter").on("click", function () {
  // Set iPhone screenshot image(s)
  $("#twitter_image").removeClass("hide");
  $(".app_title").hide().text("Twitter").slideDown();


  // Set the desired html inside of info
  $(".content").load('twitter.html', function () {
    $(".app_title").hide().slideDown();
    $("#info").hide().fadeIn();
    // Hide the other stuff
    $(".btc_price_container").hide();
    $("#crypto_bar").hide();
    $("#snap_bar").hide();
    $("#twitter_bar").show();
    $("#doc_bar").hide();

  



  // Once the content has been switched to the twitter app, set all button and API stuff
  $("#refreshTwitterFeed").toggle();
  $(".twitter-buttons").on("mouseenter", function() {
    $(this).css({
      "background-color": "#ADADAD",
      "cursor": "pointer"
    })
    }).on("mouseleave", function() {
      $(this).css("background-color", "white")
    })

  $("#getTwitterFeed, #refreshTwitterFeed").click(function() {
    if (this.id== "getTwitterFeed"){
      $("#getTwitterFeed").toggle();
      $("#refreshTwitterFeed").toggle();
    }
    $("#twitterFeed").empty();
    $.getJSON("/api/twitter", function(data, status) {
      var tweets = data.data
      $.each(tweets, function(index, value){
        $("#twitterFeed").append(`
          <li class="twitterItem" id="tweetItem${index}">
            <img src="img/trumpFace.png" width="70px" height="70px" />
            <div>
              <h5> <span>Donald J. Trump </span> @realDonaldTrump </h5>
              <p>
                ${value}
              </p>
            </div>
          </li>`)
        })
    })
  });
  });
});
