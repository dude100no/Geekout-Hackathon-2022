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

import {Sequelize} from "sequelize";

const sequelize = new Sequelize("mysql://root:WzWhiAODtduaBNtTK5rN@containers-us-west-62.railway.app:6885/railway")

module.exports = sequelize;