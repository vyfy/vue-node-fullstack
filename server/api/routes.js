module.exports = function apiRoutes(req, res) {
    if (req.method === 'GET' && req.url === '/api/hello') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify({ message: 'Hello from Node.js!' }))
    }
    
    if (req.method === 'POST' && req.url === '/api/data') {
      let body = ''
      req.on('data', chunk => body += chunk)
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ received: JSON.parse(body) }))
      })
      return
    }
    
    res.writeHead(404)
    res.end('API endpoint not found')
  }