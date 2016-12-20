io.sockets.on('connection', function (socket) {    
      socket.broadcast.emit('display',  "alert(hello)");  
});
sendHttp('index.jade', function(str, res){
    sendstr(jade.render(str),res);
}, res);
