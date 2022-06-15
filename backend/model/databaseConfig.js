// const mysql = requires('mysql');

// var dbConnect = {
//     getConnection : () => {
//         var conn = mysql.createConnection({
//             "host": ,
//             "user": ,
//             "port": ,
//             "password": ,
//             "database": ,
//             "dateStringsg": true
//         });
//         return conn;
//     }
// };

// module.exports = dbConnect;

const Sequelize = require('sequelize');
console.log(process.env.SQL_URL);
const sequelize = new Sequelize(process.env.SQL_URL);

module.exports = sequelize;