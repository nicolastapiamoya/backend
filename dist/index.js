"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//import './database'
_app["default"].listen(4000);

console.log('server listening on port 4000');