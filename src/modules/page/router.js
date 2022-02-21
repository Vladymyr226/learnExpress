import express from "express"
import { produceTextResponse } from "./controllers/pages.controller.js"

const { Router } = express

export function createPageRouter() {
  const router = Router({ mergeParams: true })

  router.get("/", (req, res) => produceTextResponse("index.ejs", req, res))

  router.get("/user/register", (req, res) => {
    produceTextResponse("user_register.ejs", req, res)
  })
  router.get("/about", (req, res) => {
    produceTextResponse("about.ejs", req, res)
  })
  router.post("/user/register", (req, res) => {
    console.log(req.body)
    res.end()
  })

  return router
}
