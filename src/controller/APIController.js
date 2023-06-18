import pool from '../configs/connectDB';
let getAllUser = async (req, res) => {
    const [row, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json({
        message: 'ok',
        data: row
    })


}
let createUser = async (req, res) => {
    let { fistname, lastname, email, address } = req.body;
    if (!fistname || !lastname || !email || !email || !address) {
        return res.status(200).json({
            message: 'misssing'

        })
    }

    await pool.execute(`insert into users(fistName,lastName,email,address) values (?,?,?,?) `, [fistname, lastname, email, address]);
    return res.status(200).json({
        message: 'ok'

    })
}
let updateUser = async (req, res) => {
    let { fistname, lastname, email, address, id } = req.body;
    if (!fistname || !lastname || !email || !email || !address || !id) {
        return res.status(200).json({
            message: 'misssing'

        })
    }


    await pool.execute('update users set fistName=?, lastName=?,email=?,address=? where id=?', [fistname, lastname, email, address, id])
    return res.status(200).json({
        message: 'ok'

    })
}
let deleteUser = async (req, res) => {
    let Id = req.params.id
    if (!Id) {
        return res.status(200).json({
            message: 'misssing'

        })
    }
    await pool.execute(`delete from users where id=?`, [Id]);
    return res.status(200).json({
        message: 'ok'

    })
}
module.exports = {
    getAllUser, createUser, updateUser, deleteUser
}