//entry point for server
let port = 8082
import express from 'express'
import path from 'path'
import credentials from './credentials'
import Twit from 'twit'
import _ from 'lodash'
var T = new Twit({
  consumer_key: credentials.consumerKey,
  consumer_secret:credentials.consumerSecret,
  access_token: credentials.AccessToken,
  access_token_secret:  credentials.AccessTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
let app = express();
//serving the main page
app.use(express.static(__dirname + '/../static'));
app.get('/', (req, res)=>{
 res.sendFile(path.join(__dirname+'/../static/index.html'));
})

//fetch the last 5 tweets of donald J trump.
app.get('/api/twitter', (req,res)=>{
  var response={}
 T.get('https://api.twitter.com/1.1/statuses/user_timeline.json', { screen_name: "realDonaldTrump", count:5})
  .then(data=>{
    response.data = _.map(data.data, 'text')
    res.status(200).send(JSON.stringify(response))
  })
  .catch((err)=>{
    response.error = "Internal server error"
    res.status(500).send(JSON.stringify(response))
  })

})
app.listen(port,()=> console.log(`listening on port: ${port}`) )
