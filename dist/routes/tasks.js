"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controller/tasks");

var _events = require("../controller/events");

var _users = require("../controller/users");

var routes = (0, _express.Router)();

/**
 * 
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 * */
routes.get('/tasks', _tasks.getTasks);
routes.get('/tasksSearch/:search', _tasks.getTasksSearch);
routes.get('/events', _events.getEvents);
routes.post('/events', _events.createEvents);
routes.get('/user', _users.getUser);
routes.post('/user', _users.createUser);
/**
 * 
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks count
 *      tags: [Tasks]
 * */

routes.get('/tasks/count', _tasks.getTaskCount);
/**
 * 
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Get tasks for Id
 *      tags: [Tasks]
 * */

routes.get('/tasks/:id', _tasks.getTask);
/**
 * 
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create task
 *      tags: [Tasks]
 * */

routes.post('/tasks', _tasks.createTask);
/**
 * 
 * @swagger
 * /tasks/:id:
 *  delete:
 *      summary: Delete task
 *      tags: [Tasks]
 * */

routes["delete"]('/tasks/:id', _tasks.deleteTask);
/**
 * 
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Update task
 *      tags: [Tasks]
 * */

routes.put('/tasks/:id', _tasks.updateTask);
var _default = routes;
exports["default"] = _default;