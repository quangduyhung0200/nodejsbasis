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
module.exports = {
    getHomepage, getDetailpage
}