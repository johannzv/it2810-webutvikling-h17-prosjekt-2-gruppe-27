var numClicked = 4;

$("#menuItemSnap").on("click", function () {
	numClicked = 0;
	$("#iPhone").attr("src", "img/snap/snapopen.svg");
	$(".app_description").load('snap.html #snapInfo').fadeIn(1000);
	$("#btc_price").hide();
	$("#snap_bar").show();
	$("#crypto_bar").hide();
	$("#twitter_bar").hide();
})


$("#iPhone").on("click", function () {
	// Changing snap photo as a person clicks on takePhoto 
	if (numClicked < 4)
	{
		var img = "img/snap/snap" + numClicked + "p.svg";
		$(this).attr("src", img);
		++numClicked;
	}
})
