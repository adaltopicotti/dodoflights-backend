const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
})

app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, 'files')));
app.use(routes);

var port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log('Listening on port %s',  port);
})