 const host = '192.168.0.189' //host ip

    let ws = new WebSocket('ws://' + window.location.host);

    ws.onopen = function (e){
      console.log("connected");

      ws.send('{"event": "sql", "query": "requestGames"}');
    };

    initController();