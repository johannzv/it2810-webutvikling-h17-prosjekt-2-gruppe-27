//entry point for server
let port = 8082
import express from 'express'
import path from 'path'

let app = express();

//serving the main page
app.use(express.static(__dirname + '/../static'));
app.get('/', (req, res)=>{
 res.sendFile(path.join(__dirname+'/../static/index.html'));
})
app.listen(port,()=> console.log(`listening on port: ${port}`) )
