//entry point for server
let port = 8082
import express from 'express'
let app = express();
app.listen(port,()=> console.log(`listening on port: ${port}`) )
