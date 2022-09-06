import { Router } from "express";
import { getTasks, getTask, getTaskCount ,createTask, deleteTask, updateTask, getTasksSearch } from "../controller/tasks"
const routes = Router();
import { getEvents, createEvents } from "../controller/events"

import { getUser, createUser } from "../controller/users"

/**
 * 
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 * */
routes.get('/tasks', getTasks)
routes.get('/tasksSearch/:search', getTasksSearch)

routes.get('/events', getEvents)
routes.post('/events', createEvents)

routes.get('/user', getUser)
routes.post('/user', createUser)
/**
 * 
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks count
 *      tags: [Tasks]
 * */
routes.get('/tasks/count', getTaskCount)


/**
 * 
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Get tasks for Id
 *      tags: [Tasks]
 * */
routes.get('/tasks/:id', getTask)


/**
 * 
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create task
 *      tags: [Tasks]
 * */
routes.post('/tasks', createTask)


/**
 * 
 * @swagger
 * /tasks/:id:
 *  delete:
 *      summary: Delete task
 *      tags: [Tasks]
 * */
routes.delete('/tasks/:id', deleteTask)


/**
 * 
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Update task
 *      tags: [Tasks]
 * */
routes.put('/tasks/:id', updateTask)

export default routes;