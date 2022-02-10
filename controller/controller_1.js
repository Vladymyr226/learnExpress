const fs = require("fs")

const HTTP_OK = 200

function produceTextResponse(fileName, res, contentType) {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      console.log(err)
      res.end()
    }

    let responseHTML = ""
    responseHTML = data

    res.writeHead(HTTP_OK, { "Content-Type": contentType })
    res.write(responseHTML)
    res.end()
  })
}

module.exports = produceTextResponse