(function(){

  let game = {
    roomId: 0,
    player: 0
  }

  const host = '192.168.0.189' //HOST IP

  let ws = new WebSocket('ws://' + host + ':8080')

 window.testws = function () {
   ws.send('tset')
 }

  ws.onmessage = function (event) {
    let data = JSON.parse(event.data);

    if (data.roomId == game.roomId){

      switch (data.event) {
        case 'error':
          notif("Connection with the game has ended");
          log(data.error);
          break;
        case 'connection':
          log("connected");
          break;
        case 'joinedRoom':
          notif("Connected");
        default:
      }

    }
  };

  window.addEventListener('onerror', (message)=>{
    log("ERROR :: " + " : " + message)
  })

function notif(msg){
  log("NOTIF : "+ msg)
  console.log(msg);
}

function log(msg){
  document.getElementById('logs').innerHTML += "<p> " + msg + "</p>"
}

  // Key bindings

  const controllerInput = {
    KEY_DOWN: 1,
    KEY_UP: 2,
    KEY_PRESS: 3
  }

  document.getElementById('A').addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+0 +'"}');
  });
  document.getElementById("A").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+0 +'"}');
  });
  document.getElementById("A").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+0 +'"}');
    log("A")
  });

  document.getElementById("B").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+1 +'"}');
  });
  document.getElementById("B").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+1 +'"}');
  });
  document.getElementById("B").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+1 +'"}');
  });

  document.getElementById("up").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+4 +'"}');
  });
  document.getElementById("up").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+4 +'"}');
  });
  document.getElementById("up").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+4 +'"}');
  });

  document.getElementById("down").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+5 +'"}');
  });
  document.getElementById("down").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+5 +'"}');
  });
  document.getElementById("down").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+5 +'"}');
  });

  document.getElementById("left").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+6 +'"}');
  });
  document.getElementById("left").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+6 +'"}');
  });
  document.getElementById("left").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+6 +'"}');
  });

  document.getElementById("right").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+7 +'"}');
  });
  document.getElementById("right").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+7 +'"}');
  });
  document.getElementById("right").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+7 +'"}');
  });

  document.getElementById("start").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+3 +'"}');
  });
  document.getElementById("start").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+3 +'"}');
  });
  document.getElementById("start").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+3 +'"}');
  });

  document.getElementById("select").addEventListener('touchstart', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_DOWN + ',"key" :"'+ game.player+2 +'"}');
  });
  document.getElementById("select").addEventListener('touchend', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_UP + ',"key" :"'+ game.player+2 +'"}');
  });
  document.getElementById("select").addEventListener('click', () => {
    ws.send('{"roomId": '+game.roomId+', "event": "input", "type": ' + controllerInput.KEY_PRESS + ',"key" :"'+ game.player+2 +'"}');
  });

})();
