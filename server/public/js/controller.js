
const host = 'SERVICEPUBLIC-terruspro961647.codeanyapp.com'

let ws = new WebSocket('ws://' + host + ':8888');

const controllerInput = {
  KEY_DOWN: 1,
  KEY_UP: 2,
  KEY_PRESS: 3
}

function initController(run) {
  ws.onmessage = function(event) {
    let input = JSON.parse(event.data);

    switch (input.type) {
      case controllerInput.KEY_DOWN:
        run.nes.keyboard.keyDown(input.key);
      break;
      case controllerInput.KEY_UP:
        run.nes.keyboard.keyUp(input.key);
      break;
      case controllerInput.KEY_PRESS:
        run.nes.keyboard.keyPress(input.key);
      break;
    }
  };
}
// $(document).
//     bind('keydown', function(evt) {
//         self.nes.keyboard.keyDown(evt);
//     }).
//     bind('keyup', function(evt) {
//         self.nes.keyboard.keyUp(evt);
//     }).
//     bind('keypress', function(evt) {
//         self.nes.keyboard.keyPress(evt);
//     });
