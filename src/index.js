require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const config = require('./app/helpers/config');

app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app);

const HOST = config.host;
const PORT = config.port;

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running at : http://${HOST}:${PORT}`)
})
