const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const book = require('./routers/book.router');
const user = require('./routers/user.router');
require('./db/mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use('/user', user)
app.use('/book', book);

module.exports = app;
