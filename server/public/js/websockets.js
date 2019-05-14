
const host = '192.168.0.181' //host ip

let ws = new WebSocket('ws://' + window.location.host);

ws.onopen = function (e){
  console.log("connected");

  var qrcode = new QRCode("qrcode", {
    text: "0",
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    // correctLevel : QRCode.CorrectLevel.H
  });

  console.log("request games");
	ws.send('{"event": "sql", "query": "requestGames"}');
};
