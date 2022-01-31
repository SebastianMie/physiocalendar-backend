const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 4000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/backup', (req, res) => {
  const data = JSON.parse(fs.readFileSync(__dirname + '/data/backup.json'));
  res.send(data);
});

app.put('/backup', () => {

});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});