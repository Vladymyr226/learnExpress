import dotenv from "dotenv"
dotenv.config()

export const INTERNAL_URLS = {
  PAGES_URL: `${process.env.APP_URL}:${process.env.APP_PORT}/api/pages/`,
}
