import { ROOT_FILE_PATH } from "../../../lib/constants/filepath.js"
import { INTERNAL_URLS } from "../../../lib/constants/url.js"

export function produceTextResponse(fileName, req, res) {
  res.render(`${ROOT_FILE_PATH}${fileName}`, {
    pageUrl: INTERNAL_URLS.PAGES_URL,
  })
}
