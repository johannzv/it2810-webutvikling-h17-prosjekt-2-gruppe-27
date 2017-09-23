
$("#menuItemCrypto").on("click", function () {
	// show snap opening page
	$(".phone").html(`
    <img src="img/btc.png" alt="iPhone" id="iPhone">`);
	$("#btc_image").removeClass("hide");
	$(".app_title").hide().text("Bitcoin Ticker").slideDown();
	$("#info").hide().text("Bitcoin Ticker lar deg sjekke oppdaterte priser på kryptovaluta som Bitcoin, Ethereum, Litecoin osv., samt få push-varsler ved endringer.").fadeIn();
	$("#btc_price").slideDown();
	$("#crypto_bar").show();
	$("#snap_bar").hide();
	$("#twitter_bar").hide();

})