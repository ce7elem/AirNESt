# AirNESt
Play the iconic NES console in your browser with an application that imitates the classic controller!

[WORK IN PROGRESS]

Building AirNESt
================

-Build and run the web server :
```
  $ # clone project and get dependencies
  $ git clone https://github.com/TERRUSS/AirNESt
  $ go get github.com/gorilla/websocket
  $ go get github.com/fatih/color

  $ # start the server
  $ cd server/
  $ go run main.go
  $ # or compile it & return
  $ go build main.go
  $ ./main
```

-Build the mobile app :
You will need [cordova](https://cordova.apache.org).
```
  $ cordova build android
```

Dependencies
------------
* [github.com/gorilla/websocket](https://github.com/gorilla/websocket)
* [github.com/fatih/color](https://github.com/fatih/color)
* [Cordova](https://cordova.apache.org)
