var app = require('express')();
var server = require('http').Server(app);

server.listen(3000, function() {

});

app.get('/', function(request, response) {
    response.send('Hello World');
});