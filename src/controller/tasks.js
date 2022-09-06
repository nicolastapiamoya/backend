import { connect } from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks');
    //console.log(rows)
    res.json(rows)
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    //console.log(rows)
    res.json(rows)
}

export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT count(*) as contador FROM tasks');
    //console.log(rows)
    res.json(rows[0]['contador'])
}

export const createTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO tasks(title, descripcion,image) VALUES (?,?,?)', [req.body.title, req.body.descripcion, req.body.image]);
    console.log(result)
    res.json(result[0])
}

export const deleteTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    console.log(result)
    res.json(result)
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE tasks SET ?  WHERE id = ?', [req.body,req.params.id]);
    console.log(result)
    res.json(result)
}

export const getTasksSearch = async (req, res) => {
    const connection = await connect();
    let stg = '%'+req.params.search+'%' 
    const [rows] = await connection.query('SELECT * FROM `tasks` WHERE  title LIKE ? OR descripcion LIKE ?',[stg,stg]);
    console.log(req.params.search)
    //console.log(rows)
    res.json(rows)
}
