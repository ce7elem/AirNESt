
const host = 'SERVICEPUBLIC-terruspro961647.codeanyapp.com'

let ws = new WebSocket('ws://' + host + ':8888');
ws.onmessage = function(event) {
  let input = event.data;
  document.getElementById('input').innerHTML = input;
  handleInput(input);
};
