const express = require('express');
const app = express();


var port = normalizePort(process.env.PORT || '3000');
var dFormat = require('date-format');

app.get('/', (req, res) => {
  var timeStr = dFormat('hh:mm:ss', new Date());
  console.log(timeStr + " - " + req.host + " - " + req.ip + ' - ' + req.originalUrl);
  res.status(200).send('Hællæ verden, her ern ' + timeStr);
});

app.listen(port, () => console.log('Scenario-1 app listening on port ' + port));

function normalizePort (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}