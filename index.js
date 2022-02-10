const express = require("express")
const bodyParser = require("body-parser")
const produceTextResponse = require("./controller/controller_1")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const SERVER_PORT = 5011

app.get("/", (req, res) => {
  produceTextResponse("index.html", res, "text/html")
})

app.get("/Users/Register", (req, res) => {
  produceTextResponse("user_register.html", res, "text/html")
})

app.get("/About", (req, res) => {
  produceTextResponse("about.html", res, "text/html")
})

app.post("/Users/Register", (req, res) => {
  console.log(req.body)
  // res.end()
})

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at http://localhost:${SERVER_PORT}`)
})
