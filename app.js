var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){//listen for the chat message event, then do things. Can be used to send commands to the zummo
//       console.log('message: ' + msg);
//     });
// });

io.on('connection', function(socket){
    socket.on('w was pressed', function(){
      console.log('message: w here');
      //send command here for robot
    });
});

io.on('connection', function(socket){
    socket.on('q was pressed', function(){
      console.log('message: q here');
      //send command here to robot
    });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`))