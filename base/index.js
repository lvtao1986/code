sendHttp('index.jade', function(str, res){
    sendstr(jade.render(str),res);
}, res);
