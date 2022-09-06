import { connect } from '../database'

export const getEvents = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM events');
    
    console.log(rows)
    res.json(rows)
}

export const createEvents = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO events(title, start,end,allDay) VALUES (?,?,?,?)', [req.body.title, req.body.start, req.body.end, 1]);
    console.log(result)
    res.json(result[0])
}