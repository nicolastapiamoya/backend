import { config } from './config';
import mysql from 'mysql2/promise';



export const connect = async () => {
   //await mysql.createConnection(config)
   const conn = await mysql.createConnection(config);
   
   return conn;
}

