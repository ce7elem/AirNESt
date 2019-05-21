# AirNESt
Play the iconic NES console in your browser with an application that imitates the classic controller!


Building AirNESt
================

- Clone and build the project :
```
  $ # clone project and get dependencies
  $ git clone https://github.com/TERRUSS/AirNESt

  $ # build the database
  $ cd AirNESt/server/
  $ mysql -u root -p AirNESt < AirNESt_DB.sql

  $ #start the server
  $ npm i && npm run serve
```

- Play ! :
Go to http://localhost:8080 on your browser to select the game,
On your phone go to "http://[YOUR IP]:8000" to get a controller !

Dependencies
------------
* [Node.JS](https://nodejs.org/en)
* [Python3](https://www.python.org/)
* [MariaDB](https://mariadb.org)
* [JSNES : a JS emulator for the NES console](https://github.com/bfirsh/jsnes)
* [ws : a Node.js WebSocket library](https://github.com/websockets/ws)
* [Bulma](https://bulma.io)
* [NES.css](https://nostalgic-css.github.io/NES.css)
