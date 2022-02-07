const data = require('./data.json');
const http = require('http');
const PORT = 3005;

const generateData = () => {
  const { stats } = data;
  
  const random = ([min, max]) => {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    );
  };
  
  const randomStats = Object.keys(stats).reduce((acc, stat) => {
    return {
      ...acc,
      [stat]: random(stats[stat])
    }
  }, {});
  return {
    ...data,
    stats: randomStats,
  }  
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/hospital') {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    response.end(JSON.stringify(generateData()));
  } else {
    response.statusCode = 404;
    response.end('Page not found. Try /hospital');
  }
});

console.info(`API running in http://localhost:${PORT}/hospital`)
server.listen(PORT);


