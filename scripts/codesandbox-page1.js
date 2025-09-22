const http = require('http')

const PORT = 8090

const message = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sample Application</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: #f9fafb;
    }
    h1 {
      color: #2563eb;
    }
    p {
      font-size: 18px;
      color: #374151;
    }
    .box {
      display: inline-block;
      padding: 20px 40px;
      margin-top: 20px;
      border: 2px solid #2563eb;
      border-radius: 8px;
      background: #e0f2fe;
    }
  </style>
</head>
<body>
  <h1>🚀 Sample Application</h1>
  <p>This is a simple Node.js test server running on port ${PORT}.</p>
  <div class="box">
    Go ahead and ignore this. <br />
    Open the terminal and run <strong>npm test</strong>.
  </div>
</body>
</html>
`

console.log(`Sample Application running at http://localhost:${PORT}`)

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(message)
  })
  .listen(PORT)

