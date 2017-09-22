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
