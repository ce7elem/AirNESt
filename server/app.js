
const app = require('express')();
const server = require("http").createServer(app);
const WebSocket = require('ws');

const mysql = require('mysql');
// const jsSHA = require("jssha");

const databaseWrapper = require('./db_wrapper.js');
var config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'toor',
    database: 'AirNESt',
    insecureAuth: true,
    port : 3306,
};
var database = new databaseWrapper.Database(mysql, config);


/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/airnest.html');
});
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});
app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/public/jeu.html');
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

    data = JSON.parse(data);
    console.log(data);
    console.log(data.event);

    switch (data.event) {
      case 'input':
          // Broadcast to everyone else.
          wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data);
            }
          });
        break;
      case 'sql':
      console.log("[SQL] new request");
        switch (data.query) {
          case 'requestGames':
            console.log("[SQL] New connection : sending Games");
            let query = 'SELECT * FROM Game ORDER BY name;';
            database.query(query).then(rows => {
              ws.send('{"event": "sql", "query": "requestGames", "result":' +JSON.stringify(rows)+ '}');
            })
            break;
          default:

        }
      default:

    }
  });
});



server.listen(8080);
