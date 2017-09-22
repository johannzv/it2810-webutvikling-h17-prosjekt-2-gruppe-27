
$("#menuItemCrypto").on("click", function () {
	// show snap opening page
	$(".phone").html(`
    <img src="../design/iphone.svg" alt="iPhone" id="iPhone">
    <img src="../design/btc.jpg" alt="btc" id="btc_image" class="hide placeInPhone">
        
  

`);
	$("#btc_image").removeClass("hide");
	$(".app_title").text("Bitcoin Ticker");
	$("#info span").text("Bitcoin Ticker lar deg sjekke oppdaterte priser på kryptovaluta som Bitcoin, Ethereum, Litecoin osv., samt få push-varsler ved endringer.");
	$("#btc_price").show();

	// show text info
	// $("#infoHeader").text("Snap gir oss mye glede i hverdagen.")
})















$(document).ready(function () {
	// show snap opening page
	var h = $("#iPhone").height();
	var w = $("#IPhone").width();
	$("#btc_img").removeClass("hide");
	$("#btc_img").css("width", w)
	$("#btc_img").css("height", h)



	// show text info
	// $("#info").text("lorem ipsum bitcoin")
})