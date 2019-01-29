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


app.get('/api/stats', (req, res) => {
    axios.get('https://api.sportradar.us/nba/trial/v5/en/seasons/2018/REG/teams/583ecae2-fb46-11e1-82cb-f4ce4684ea4c/statistics.json?api_key=maymdbfanugk8a94zsp66tq5')
        .then(response => {
        res.send(response.data);
        })
        .catch(function (error) {
        res.send(error);
        });
})


module.exports = app;
