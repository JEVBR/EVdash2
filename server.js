const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

const SerialPort = require('serialport');

const settings = require('./local-settings.json');
//{
//  "port": "/dev/ttyACM0",
//  "device": "DELL"
//}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// const rsPort = new SerialPort(settings.port, {
//   baudRate: 115200,
//   bufferSize: 1,
//   rtscts: true,
// });

// tsPort.on('data', (data) => {
//   str += data;
//   if (str.includes('!')) {
//     port.flush();
//     console.log(str);
//     io.emit('chat message', str); // send msg to web interface.
//     str = '';
//   }
// });

const sendSerial = (data) => {
  console.log(data);
  port.write(data);
};

io.on('CMD', (data) => { console.log(data); });

io.on('connection', (socket) => {
  console.log('User connected'); // this will print when users are connected

  socket.on('chat message', (msg) => { console.log(msg); });

  socket.on('disconnect', (data) => { console.log('-disconnected the socket!-'); });

  socket.on('CMD', (data) => { sendSerial(data); });
});