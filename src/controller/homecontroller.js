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
    console.log(fistname);

    await pool.execute(`insert into users(fistName,lastName,email,address) values (?,?,?,?) `, [fistname, lastname, email, address]);
    return res.redirect('/');
}
let deleteUser = async (req, res) => {
    let Id = req.body.userIddelete
    await pool.execute(`delete from users where id=?`, [Id]);
    return res.redirect('/');
}
let editUser = async (req, res) => {
    let iduser = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [iduser]);
    return res.render('update.ejs', { dataUser: user[0] });

}
let updateUser = async (req, res) => {
    let { fistname, lastname, email, address, id } = req.body;
    console.log(req.body);
    await pool.execute('update users set fistName=?, lastName=?,email=?,address=? where id=?', [fistname, lastname, email, address, id])
    return res.redirect('/');
}
module.exports = {
    getHomepage, getDetailpage, createNewUser, deleteUser, editUser, updateUser
}