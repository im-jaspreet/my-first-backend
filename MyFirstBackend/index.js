require('dotenv').config()
const express = require('express')

const app = express()
console.log("My First Backend w Chai aur Code!");

// const port = 3000  // virtual port where server will run and listen for incoming requests
const port = process.env.PORT || 3000  // to use port from .env file or default to 3000

// from "api.github.com/users/im-jaspreet":
const apiData = {
  "login": "im-jaspreet",
  "id": 243425428,
  "node_id": "U_kgDODoJglA",
  "avatar_url": "https://avatars.githubusercontent.com/u/243425428?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/im-jaspreet",
  "html_url": "https://github.com/im-jaspreet",
  "followers_url": "https://api.github.com/users/im-jaspreet/followers",
  "following_url": "https://api.github.com/users/im-jaspreet/following{/other_user}",
  "gists_url": "https://api.github.com/users/im-jaspreet/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/im-jaspreet/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/im-jaspreet/subscriptions",
  "organizations_url": "https://api.github.com/users/im-jaspreet/orgs",
  "repos_url": "https://api.github.com/users/im-jaspreet/repos",
  "events_url": "https://api.github.com/users/im-jaspreet/events{/privacy}",
  "received_events_url": "https://api.github.com/users/im-jaspreet/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-11-11T20:00:45Z",
  "updated_at": "2025-11-17T16:30:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reddit', (req, res) => {
  res.send('Welcome to Reddit')
})

app.get('/github-profile', (req, res) => {
  res.json(apiData)  // send JSON response
  //res.send(apiData)  // this would also work, but res.json() is more appropriate for JSON data
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// req stands for request, res stands for response
// app.get() is used to handle GET requests to the specified path
// res.send() is used to send a response back to the client
// app.listen() is used to start the server and listen for incoming requests on the specified port
// at "https://expressjs.com/en/4x/api.html", there are so many more methods for app.<method>(), req.<method>(), res.<method>()
