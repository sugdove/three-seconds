const path = require('path');
const http = require('http');
const fs = require('fs');
const dir = path.resolve(__dirname, 'files')
http.createServer((req, res) => {
  const url = req.url;
  console.log(url, 'url')
  console.log(dir + url, 'dir + url')
  fs.readFile(dir + url, (err, data) => {
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/html,charset: UTF-8" })
      res.end(data)
    }
    else {
      res.writeHead(404, { "Content-Type": "text/html,charset: UTF-8" })
      res.end('未找到该文件')
    }
  })
}).listen(1234, () => {
  console.log('服务启动在1234端口')
})