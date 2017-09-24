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
        $("#tickerImg").attr('src', 'img/upTicker.svg');
      } else if (price < prev) {
        console.log("In lower");
        $("#tickerImg").attr('src', 'img/downTicker.svg');
      } else {
        console.log("In either");
        $("#tickerImg").attr('src', 'img/neutralTicker.svg');
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