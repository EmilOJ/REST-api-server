const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup

// Server Setup
const port = process.env.PORT || 3090; //check if PORT is available as environment variable
const server = http.createServer(app); // connect express to node.js
server.listen(port);
console.log('Server listening on:', port);
