'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _credentials = require('./../credentials.json');

var _credentials2 = _interopRequireDefault(_credentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//definener hvilken port som skal brukes
//I dette prosjektet port 8082
var port = 8082;
//Importerer exprees

//Importerer path, slik at man kan referer filer

//Importerer Twit, et wrapperbibliotek runt twitterApiet

//Importer lodash, et utitilitybibliotek


/*
Importere twitter-nøkler. Disse er lagt i egen fil¢ av sikkerhetsmessige årsaker
Disse er også kopiert til den virtuelle serveren, men lagt til .gitignore så de
ikke blir offentliggjort.
*/


//Lager en instans av Twit
var T = new _twit2.default({
  consumer_key: _credentials2.default.consumerKey,
  consumer_secret: _credentials2.default.consumerSecret,
  access_token: _credentials2.default.AccessToken,
  access_token_secret: _credentials2.default.AccessTokenSecret,
  timeout_ms: 60 * 1000
});
///nitialeserer express
var app = (0, _express2.default)();

//Bruker innebygd middleware fra express for å kunne serve statiske filer
app.use(_express2.default.static(__dirname + '/../static'));

//Setter opp endpoint for "/", man skal da få opp index.html
app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname + '/../static/index.html'));
});

//Setter opp endpoint for twitter-feed.
app.get('/api/twitter', function (req, res) {
  //Deklarer et responsobjekt
  var response = {};
  //Henter tweets ved hjelp av Twit, henter de fem siste
  //T.get returnerer et promise.
  T.get('https://api.twitter.com/1.1/statuses/user_timeline.json', { screen_name: "realDonaldTrump", count: 5 }).then(function (data) {
    //T.get reurtnere data.
    //Bruker lodash til å mappe over resultet og kun ta ut teksten
    response.data = _lodash2.default.map(data.data, 'text');
    //Sender tweetsene tilbake til client
    res.status(200).send(JSON.stringify(response));
  }).catch(function (err) {
    //T.get returner en error, sender derfor feilmelding til client
    response.error = "Internal server error";
    res.status(500).send(JSON.stringify(response));
  });
});

//Får serverern til å lytte på port 8082 og skriver dette ut til console.
app.listen(port, function () {
  return console.log('listening on port: ' + port);
});