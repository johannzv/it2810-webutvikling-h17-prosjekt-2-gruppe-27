$("#menuItemSnap").on("click", function () {
	
	// show snap opening page
	$(".content").load('snap.html', function () {
		$(".app_title").hide().slideDown();
		$("#info").hide().fadeIn();
		$(".btc_price_container").hide();
		$("#snap_bar").show();
		$("#crypto_bar").hide();
		$("#twitter_bar").hide();
	})
})


var numClicked = 0;
$(".placeInPhone").on("click", function () {
	// Changing snap photo as a person clicks on takePhoto div
	if (numClicked == 0)
	{
		var idshow = "#snap" + numClicked + "p";
		$(idshow).removeClass("hide");
		++numClicked
	}
	else if (numClicked < 4)
	{
		var idhide = "#snap" + numClicked + "p";
		var idshow = "#snap" + numClicked++ + "p";
		$(idhide).addClass("hide");
		$(idshow).removeClass("hide");
	}
})
