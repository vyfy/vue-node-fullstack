const http = require('http')
const cors = require('./utils/cors')
const apiRoutes = require('./api/routes')

const server = http.createServer((req, res) => {
  // Обработка CORS
  cors(req, res)
  
  // Маршрутизация API
  if (req.url.startsWith('/api')) {
    return apiRoutes(req, res)
  }
  
  // Статический файл (для production)
  res.writeHead(404)
  res.end('Not Found')
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})