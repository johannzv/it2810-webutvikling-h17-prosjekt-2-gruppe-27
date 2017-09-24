function getPrice(prev) {
  $.ajax({
    url: "https://poloniex.com/public?command=returnTicker",
    success: function(data) {
      if ( data != "ERROR" ) {
    	price = parseInt(data.USDT_BTC.last)
    }

    if (prev != -1) {
      if (price > prev) {

        $("btc_price span").css('color', 'green');
      } else if (price < prev) {

        $("btc_price span").css('color', 'red');
      } else {

        $("btc_price span").css('color', 'black');
      }
    }

    $("#btc_price span").fadeOut().text(price+" USD").fadeIn()
    $("#tickerImg").fadeOut().fadeIn();
    setTimeout(getPrice, 5000, price);
    }
  });

}

$(document).ready(function() {
  // run the first time; all subsequent calls will take care of themselves every 5 seconds
  getPrice(-1);
});
