
const app = require('express')();
const server = require('http').Server(app);

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/run.html');
});
app.get('/cube', (req, res) => {
  res.sendFile(__dirname + '/public/cube.html');
});


		/**************************/

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8888 });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});


server.listen(8080);
