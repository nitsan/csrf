const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');


const app = express();

// setup route middlewares
const csrfProtection = csrf({
  cookie: true,
  key: 'csrf',
  secure: true,
  maxAge: 3600,
  httpOnly: true,
  sameSite: 'strict'
});
const parseForm = bodyParser.urlencoded({extended: false})

app.use(cookieParser())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist', 'csrf')));

app.get('/api/form', csrfProtection, (req, res) => {
  // pass the csrfToken to the view
  res.json({csrfToken: req.csrfToken()})
});
app.post('/api/update-form', csrfProtection, (req, res) => {
  res.json(req.body);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'csrf', '/index.html'));
});
app.listen(3000, function () {
  console.log(`app listening on port ${3000}!`);
});

module.exports = app;
