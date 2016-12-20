sendHttp('index.jade', function(str, res){
    _RESULT = jade.render(str);
},  res);
