"use strict";

var _express = require("express");

var _events = require("../controller/events");

var routes = (0, _express.Router)();
routes.get('/events', _events.getEvents);