import pool from '../configs/connectDB';


let getHomepage = async (req, res) => {

    const [row, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: row })


}
let getDetailpage = async (req, res) => {
    let userid = req.params.userId;
    console.log(userid);
    let user = await pool.execute(`SELECT * FROM users WHERE id = ?`, [userid]);

    return res.send(JSON.stringify([user[0]]));
}
let createNewUser = async (req, res) => {

    let { fistname, lastname, email, address } = req.body;

    await pool.execute(`insert into users(fistName,lastName,email,address) values (?,?,?,?) `, [fistname, lastname, email, address]);
    return res.redirect('/');
}
module.exports = {
    getHomepage, getDetailpage, createNewUser
}