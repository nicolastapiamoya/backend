import { connect } from '../database'

export const getUser = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [req.params.email, req.params.password]);
    console.log(rows)
    res.json(rows)
}

export const createUser = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO user(email, password) VALUES (?,?)', [req.body.email, req.body.password]);
    console.log(result)
    res.json(result[0])
}