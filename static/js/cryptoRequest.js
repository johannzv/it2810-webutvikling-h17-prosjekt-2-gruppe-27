$(document).ready((function() {
  var poloniexAPI = "https://poloniex.com/public?command=returnTicker";
  $.getJSON( poloniexAPI, function( data ) {
    if ( data != "ERROR" ) {
    	price = Number(data.USDT_BTC.last)
    }
    alert(price)
	})
}));


