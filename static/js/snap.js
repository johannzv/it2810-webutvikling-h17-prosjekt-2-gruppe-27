$("#menuItemSnap").on("click", function () {
	
	// show snap opening page
	$(".phone").html(`
    <img src="img/snap/snap0p.png" alt="iPhone" id="iPhone">
        <!-- snappictures -->
        <img src="img/snap/snap0p.png" alt="snap0p" id="snap0p" class="hide placeInPhone">
        <img src="img/snap/snap1p.png" alt="snap1p" id="snap1p" class="hide placeInPhone">
        <img src="img/snap/snap2p.png" alt="snap2p" id="snap2p" class="hide placeInPhone">
        <img src="img/snap/snap3p.png" alt="snap3p" id="snap3p" class="hide placeInPhone">
`)
	$(".app_title").hide().text("Snapchat").slideDown();
	$("#info").hide().text("Snapchat gir oss mye glede i hverdagen").fadeIn();
	$("#btc_price").hide();
	$("#snap_bar").show();
	$("#crypto_bar").hide();
	$("#twitter_bar").hide();

	// show text info
	// $("#infoHeader").text("Snap gir oss mye glede i hverdagen.")
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
