const express = require("express");
const app = express();
// routes
require('./auth.routes')(app);
require('./user.routes')(app);