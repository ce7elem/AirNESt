
const app = require('express')();
const server = require("http").createServer(app);
const WebSocket = require('ws');

const mysql = require('mysql');
// const jsSHA = require("jssha");

const databaseWrapper = require('./db_wrapper.js');
var config = {
    host: '192.168.0.192',
    user: 'root',
    password: 'CmdCouseau',
    database: 'AirNESt'
};
var database = new databaseWrapper.Database(mysql, config);


/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
  let query = 'SELECT * FROM Client;'
    database.query(query).then(rows => {
      console.log(rows);
    })
  res.sendFile(__dirname + '/index.html');
});

/******************************************************************************/

    //Websockets events

const wss = new WebSocket.Server({ server });

// Broadcasting method
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  console.log("connection");
  ws.send('{"event" : "connection"}')

  ws.on('message', function incoming(data) {
    console.log(data);
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});



server.listen(8080);
