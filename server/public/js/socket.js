
const host = '127.0.0.1' //host ip

let ws = new WebSocket('ws://' + window.location.host + '/ws');

ws.onopen = function (e){
  console.log("connected");
};
