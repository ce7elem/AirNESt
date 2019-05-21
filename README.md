# AirNESt
Play the iconic NES console in your browser with an application that imitates the classic controller!


Building AirNESt
================

- Build and run the web server :
```
  $ # clone project and get dependencies
  $ git clone https://github.com/TERRUSS/AirNESt

  $ # start the server
  $ cd AirNESt/server/
  $ npm i && node app.js
  $ # or compile it & return
```

- Build the mobile app :
You will need [cordova](https://cordova.apache.org).
```
  $ cordova create airnest_gamepad
  $ # copy the git's /gamepad/* in the folder
  $ cordova platform add android
  $ cordova build android
```

Dependencies
------------
* [Cordova](https://cordova.apache.org)
* [node.js](https://nodejs.org/en)
* [mariadb](https://mariadb.org)
* [JSNES](https://github.com/bfirsh/jsnes)
* [ws: a Node.js WebSocket library](https://github.com/websockets/ws)
* [bulma](https://bulma.io)
* [NES.css](https://nostalgic-css.github.io/NES.css)
