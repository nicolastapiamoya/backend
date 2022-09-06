import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions'


const specs = swaggerJSDoc(options)


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(tasksRoutes)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app

