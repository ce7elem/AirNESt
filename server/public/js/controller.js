const controllerInput = {
  KEY_DOWN: 1,
  KEY_UP: 2,
  KEY_PRESS: 3
}

let game = {
  roomId: 0
}

function initController(run) {
  console.log("CONTROLLER INITIALISATION");

  ws.onmessage = function(event) {
    let data = JSON.parse(event.data);
    console.log(data);
    switch (data.event) {
      case 'sql':
        display(data.result);
        break;
      case 'input':
        if (data.roomId == game.roomId) {
          handleInput(data);
          break;
        }
      case 'error':
        notif("Something went wrong...");
        console.log(data.error);
        break;
      case 'connection':
        notif("new connected");
        break;
      default:
        console.log(data);
    }

  };
}

function handleInput(input){
  switch (input.type) {
    case controllerInput.KEY_DOWN:
      window.endpoint.nes.keyboard.keyDown(input);
    break;
    case controllerInput.KEY_UP:
      window.endpoint.nes.keyboard.keyUp(input);
    break;
    case controllerInput.KEY_PRESS:
      window.endpoint.nes.keyboard.keyPress(input);
    break;
		default:
  }

}
