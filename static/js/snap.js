var numClicked = 4;

$("#menuItemSnap").on("click", function () {
	
	// show snap opening page
	$(".content").load('snap.html', function () {
		numClicked = 0;
		$(".app_title").hide().slideDown();
		$("#info").hide().fadeIn();
		$(".btc_price_container").hide();
		$("#snap_bar").show();
		$("#crypto_bar").hide();
		$("#twitter_bar").hide();
		$("#doc_bar").hide();
		$("#iPhone").attr("src", "img/snap/snapopen.svg");

		$("#iPhone").on("click", function () {
			// Changing snap photo as a person clicks on takePhoto 
			if (numClicked < 4)
			{
				var img = "img/snap/snap" + numClicked + "p.svg";
				$(this).attr("src", img);
				++numClicked;
			}
		})
	})
})



