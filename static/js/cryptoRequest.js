function getPrice() {
  $.ajax({
    url: "https://poloniex.com/public?command=returnTicker",
    success: function(data) {
      if ( data != "ERROR" ) {
    	price = parseInt(data.USDT_BTC.last)
    }
    $("#btc_price span").text(price+" USD");
    }
  });
  setTimeout(getPrice, 5000); 
}

$(document).ready(function() {
  // run the first time; all subsequent calls will take care of themselves every 5 seconds
  getPrice()
  setTimeout(getPrice, 5000);
});