const http = require('http');
const app = require('./app.js');


const PORT = 3000;

// this is our static server (solely used to server up index.html)
const server = http.createServer(app);

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
