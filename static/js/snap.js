$("#menuItemSnap").on("click", function () {
	// show snap opening page
	var h = $("#iPhone").height();
	var w = $("#IPhone").width();
	$("#snapopen").removeClass("hide");
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
