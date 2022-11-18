const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 4000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.use(cors());

app.get('/backup', (req, res) => {
  const data = JSON.parse(fs.readFileSync(__dirname + '/data/backup.json'), 'utf-8');
  res.send(data);
});

app.put('/backup', (req, res) => {
  const postData = req.body;
  fs.writeFileSync(__dirname + '/data/backup.json', JSON.stringify(postData, null, 2), 'utf-8');
  res.sendStatus(200);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});