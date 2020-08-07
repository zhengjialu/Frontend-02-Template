const http = require('http')

http.createServer((req, res) => {
  let body = []
  req.on('error', err => {
    console.error(err)
  }).on('data', chunk => {
    body.push(chunk.toString())
  }).on('end', () => {
    // body = Buffer.concat(body).toString()
    console.log('body:', body)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(
    `<html lang="en">
      <head>
        <title>Document</title>
        <style>
          body p {
            color: blue;
          }
        </style>
      </head>
      <body>
        <p>hello world!</p>
      </body>
    </html>`
    )
  })
}).listen(8088)

console.log('服务启动成功')