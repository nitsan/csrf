const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/update-form', (req, res) => {
  res.json(req.body);
});
app.listen(3000, function () {
  console.log(`app listening on port ${3000}!`);
});

module.exports = app;
