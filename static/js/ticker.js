
$("#menuItemCrypto").on("click", function () {
	// show snap opening page
	$(".phone").html(`
    <img src="../design/iphone.svg" alt="iPhone" id="iPhone">
    <img src="../design/btc.jpg" alt="btc" id="btc_image" class="hide placeInPhone">
        
  

`);
	$("#btc_image").removeClass("hide");
	$(".app_title").text("Bitcoin Ticker");
	$("#info").text("Bitcoin Ticker lar deg sjekke oppdaterte priser på kryptovaluta som Bitcoin, Ethereum, Litecoin osv., samt få push-varsler ved endringer.");
	$("#btc_price").show();
	$("#crypto_bar").show();
	$("#snap_bar").hide();
	$("#twitter_bar").hide();

})