
$("#menuItemCrypto").on("click", function () {
	// show snap opening page
	$(".content").load('ticker.html', function() {
		$("#tickerImg").removeClass("hide");
		$(".app_title").hide().slideDown();
		$("#info").hide().fadeIn();
		$(".btc_price_container").slideDown();
		$("#crypto_bar").show();
		$("#snap_bar").hide();
		$("#twitter_bar").hide();
		$("#doc_bar").hide();

	});

		


})