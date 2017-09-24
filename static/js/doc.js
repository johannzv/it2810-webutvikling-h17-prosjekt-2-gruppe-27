$("#menuItemDoc").on("click", function () {
	// show snap opening page
	$(".content").load('documentation.html');
	$("#crypto_bar").hide();
	$("#snap_bar").hide();
	$("#twitter_bar").hide();
	$("doc_bar").show();

})