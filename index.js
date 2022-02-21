import express from "express"
import bodyParser from "body-parser"
import { createBasicRouter } from "./src/modules/system/router.js"
import { createPageRouter } from "./src/modules/page/router.js"

const { Router } = express

const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("static/pages"))

function addApiRoutes() {
  const router = Router({ mergeParams: true })
  router.use("/pages", createPageRouter())
  return router
}

app.use("/", createBasicRouter())
app.use("/api", addApiRoutes())

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.APP_PORT}`)
})
