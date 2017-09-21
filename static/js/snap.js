alert("snap.js is loaded.")

$("#snapPage").on("click", function () {
	// show snap opening page
	$("#snapopen").removeClass("hide");
})

/*
$(#takePhoto).on("click", function (numClicked) {
	// Changing snap photo as a person clicks on takePhoto div
	var idhide = "snap" + numClicked + "p";
	var idshow = "snap" + ++numClicked + "p";
	$(idhide).hide();
	$(idshow).removeClass(".hide");
	alert("takePhoto is now clicked " + numClicked + " times.");
})
*/
