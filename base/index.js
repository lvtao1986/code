sendHttp('index.jade', function(str, res){
    sendstr(jade.render(str),res);
}, res);
io.sockets.on('connection', function (socket) {    
      socket.broadcast.emit('display',  "alert(hello)");  
});
