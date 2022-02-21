import express from "express"
import { getStatus } from "./controllers/system.controller.js"

const { Router } = express
export function createBasicRouter() {
  const router = Router({ mergeParams: true })

  router.get("/", getStatus)
  return router
}
