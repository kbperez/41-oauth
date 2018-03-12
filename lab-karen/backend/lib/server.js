'use strict';

//App dependancies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./error-handler');
const debug = require('debug')('http: server');

//App set-up
const app = express();
const PORT = process.env.PORT;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

//Middleware
app.use(cors());
app.use('/api/v1', router);
require('../route/route-auth')(router);
require('../route/route-gallery')(router);
app.all('/{0, }', (req, res) => errorHandler(new Error('Path Error. Route not found.'), res));

//Server controls
const server = module.exports = {};
debug('server');
server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server error.  Cannot start server, already running.'));
    server.http = app.listen(PORT, () => {
      debug(`Listening on ${PORT}`);
      // console.log(`Listening on ${PORT}`);
      server.isOn = true;
      mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if(!server.isOn) return reject(new Error('Server error.  Cannot stop server that is not running.'));
    server.http.close(() => {
      server.isOn = false;
      mongoose.disconnect();
      return resolve();
    });
  });
};
