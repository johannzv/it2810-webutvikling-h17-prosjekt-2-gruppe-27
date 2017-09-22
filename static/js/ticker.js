
$("#menuItemCrypto").on("click", function () {
	// show snap opening page
	$(".phone").html(`
    <img src="img/btc.png" alt="iPhone" id="iPhone">`);
	$("#btc_image").removeClass("hide");
	$(".app_title").text("Bitcoin Ticker");
	$("#info").text("Bitcoin Ticker lar deg sjekke oppdaterte priser på kryptovaluta som Bitcoin, Ethereum, Litecoin osv., samt få push-varsler ved endringer.");
	$("#btc_price").show();
	$("#crypto_bar").show();
	$("#snap_bar").hide();
	$("#twitter_bar").hide();

})