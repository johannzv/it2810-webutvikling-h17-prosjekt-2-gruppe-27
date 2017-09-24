//definener hvilken port som skal brukes
//I dette prosjektet port 8082
let port = 8082
//Importerer exprees
import express from 'express'
//Importerer path, slik at man kan referer filer
import path from 'path'
//Importerer Twit, et wrapperbibliotek runt twitterApiet
import Twit from 'twit'
//Importer lodash, et utitilitybibliotek
import _ from 'lodash'

/*
Importere twitter-nøkler. Disse er lagt i egen fil¢ av sikkerhetsmessige årsaker
Disse er også kopiert til den virtuelle serveren, men lagt til .gitignore så de
ikke blir offentliggjort.
*/
import credentials from './../credentials.json'

//Lager en instans av Twit
var T = new Twit({
  consumer_key: credentials.consumerKey,
  consumer_secret:credentials.consumerSecret,
  access_token: credentials.AccessToken,
  access_token_secret:  credentials.AccessTokenSecret,
  timeout_ms:           60*1000,
})
///nitialeserer express
let app = express();

//Bruker innebygd middleware fra express for å kunne serve statiske filer
app.use(express.static(__dirname + '/../static'));

//Setter opp endpoint for "/", man skal da få opp index.html
app.get('/', (req, res)=>{
 res.sendFile(path.join(__dirname+'/../static/index.html'));
})

//Setter opp endpoint for twitter-feed.
app.get('/api/twitter', (req,res)=>{
//Deklarer et responsobjekt
  var response={}
//Henter tweets ved hjelp av Twit, henter de fem siste
//T.get returnerer et promise.
 T.get('https://api.twitter.com/1.1/statuses/user_timeline.json', { screen_name: "realDonaldTrump", count:5})
  .then(data=>{
//T.get reurtnere data.
//Bruker lodash til å mappe over resultet og kun ta ut teksten
    response.data = _.map(data.data, 'text')
//Sender tweetsene tilbake til client
    res.status(200).send(JSON.stringify(response))
  })
  .catch((err)=>{
//T.get returner en error, sender derfor feilmelding til client
    response.error = "Internal server error"
    res.status(500).send(JSON.stringify(response))
  })

})

//Får serverern til å lytte på port 8082 og skriver dette ut til console.
app.listen(port,()=> console.log(`listening on port: ${port}`) )
