var n = Math.random();
if(n > 0.5){
    res.send(jade.render("h Hello \nscript !{script}", { script: 'alert(' + n + ')'}));
}else{
    next();
}
