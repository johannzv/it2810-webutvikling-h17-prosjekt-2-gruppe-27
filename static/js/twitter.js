$("#menuItemTwitter").on("click", function () {
  // Set iPhone screenshot image(s)
  $(".phone").html(`
    <img src="../design/iphone.svg" alt="iPhone" id="iPhone">`);
  $("#twitter_image").removeClass("hide");
  $(".app_title").hide().text("Twitter").slideDown();
  

  // Set the desired html inside of info
  $("#info").html(`<p>Twitter er en App jeg er svært takknemligfor. Her kan hvem som helst med en konto poste små meldinger på 140 tegn om alt og ingenting. En av mine favorittpersoner å følge er @realDonaldTrump, USAs president. Dette usminka Tweets rett fra levra.
            #MAGA </p>
          <p>
            Jeg anbefaler selvfølgelig alle å følge @realDonalTrump på Twitter. Om du allerde ikke har fått oppleve denne store Twitter-profilen skal jeg gi deg en smake bit her.
          </p>
          <div id="getTwitterFeed" class="twitter-buttons">
            <span>
            Hent tweets fra Trump
          </span>
          </div>
          <div id="refreshTwitterFeed" class="twitter-buttons">
            <span>
            Oppdater
          </span>
          </div>
          <ul class="twitterFeed" id="twitterFeed">
          </ul>

    `);
  $("#info").hide().fadeIn();
  // Hide the other stuff
  $("#btc_price").hide();
  $("#crypto_bar").hide();
  $("#snap_bar").hide();
  $("#twitter_bar").show();



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
            <img src="img/president.svg" width="50px" height="50px" />
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
