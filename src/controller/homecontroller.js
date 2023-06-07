import connection from '../configs/connectDB';
let getHomepage = (req, res) => {
    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log('check sql')
            console.log(results); // results contains rows returned by server
            data = results.map((row) => { return row });
            return res.render('index.ejs', { dataUser: data });
        }
    );
}
export default {
    getHomepage
}