function getPrice(prev) {
  $.ajax({
    url: "https://poloniex.com/public?command=returnTicker",
    success: function(data) {
      if ( data != "ERROR" ) {
    	price = parseInt(data.USDT_BTC.last)
    }
    console.log("prev");
    console.log(prev);
    console.log("price");
    console.log(price);
    if (prev != -1) {
      if (price > prev) {
        console.log("In higher");
        $("btc_price span").css('color', 'green');
      } else if (price < prev) {
        console.log("In lower");
        $("btc_price span").css('color', 'red');
      } else {
        console.log("In either");
        $("btc_price span").css('color', 'black');
      }
    }
    $("#btc_price span").fadeOut();
    $("#btc_price span").text(price+" USD");
    $("#btc_price span").fadeIn();
    setTimeout(getPrice, 5000, price);
    }
  });
   
}

$(document).ready(function() {
  // run the first time; all subsequent calls will take care of themselves every 5 seconds
  getPrice(-1);
});