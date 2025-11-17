require('dotenv').config()
const express = require('express')
const app = express()


console.log("My First Backend w Chai aur Code!");

// const port = 3000  // virtual port where server will run and listen for incoming requests
const port = process.env.PORT || 3000  // to use port from .env file or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reddit', (req, res) => {
  res.send('Welcome to Reddit')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// req stands for request, res stands for response
// app.get() is used to handle GET requests to the specified path
// res.send() is used to send a response back to the client
// app.listen() is used to start the server and listen for incoming requests on the specified port
// at "https://expressjs.com/en/4x/api.html", there are so many more methods for app.<method>(), req.<method>(), res.<method>()
