setInit(function(){
	socket.on('ask', function(){
		socket.emit('display','alert("hello")');
	})
});
sendHttp('index.jade', function(str, res){
    sendstr(jade.render(str),res);
}, res);
