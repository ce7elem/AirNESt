(function(){
  const host = 'SERVICEPUBLIC-terruspro961647.codeanyapp.com'

  // document.addEventListener('deviceready', () => {
  let ws = new WebSocket('ws://' + host + ':8888');
  // ws.onmessage = function (event) {
  //   log(event);
  // };

  const controllerInput = {
    KEY_DOWN: 1,
    KEY_UP: 2,
    KEY_PRESS: 3
  }

  document.getElementById('A').addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"A"}');
  });
  document.getElementById("A").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"A"}');
  });
  document.getElementById("A").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"A"}');
  });

  document.getElementById("B").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"B"}');
  });
  document.getElementById("B").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"B"}');
  });
  document.getElementById("B").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"B"}');
  });

  document.getElementById("up").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"up"}');
  });
  document.getElementById("up").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"up"}');
  });
  document.getElementById("up").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"up"}');
  });

  document.getElementById("down").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"down"}');
  });
  document.getElementById("down").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"down"}');
  });
  document.getElementById("down").addEventListener('click', () => {
    console.log("down");
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"down"}');
  });

  document.getElementById("left").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"left"}');
  });
  document.getElementById("left").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"left"}');
  });
  document.getElementById("left").addEventListener('click', () => {
    console.log('left');

    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"left"}');
  });

  document.getElementById("right").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"right"}');
  });
  document.getElementById("right").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"right"}');
  });
  document.getElementById("right").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"right"}');
  });

  document.getElementById("start").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"start"}');
  });
  document.getElementById("start").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"start"}');
  });
  document.getElementById("start").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"start"}');
  });

  document.getElementById("select").addEventListener('touchstart', () => {
    ws.send('{"type": ' + controllerInput.KEY_DOWN + ',"key" :"select"}');
  });
  document.getElementById("select").addEventListener('touchend', () => {
    ws.send('{"type": ' + controllerInput.KEY_UP + ',"key" :"select"}');
  });
  document.getElementById("select").addEventListener('click', () => {
    ws.send('{"type": ' + controllerInput.KEY_PRESS + ',"key" :"select"}');
  });
})();


// });
