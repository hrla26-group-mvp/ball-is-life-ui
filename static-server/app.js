const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/data', (req, res) => {
  axios.get('http://localhost:5000/api/data')
    .then(({ data }) => {
      res.send(data);
    });
});

module.exports = app;
