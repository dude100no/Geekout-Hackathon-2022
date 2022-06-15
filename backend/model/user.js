const sequelize = require("./databaseConfig.js");
const { QueryTypes } = require('sequelize');

var User = {
    getUserInfo : async (userid, callback) => {
        try {
            console.log("Connection with sql database is successful");
            var QUERY = `SELECT * FROM user WHERE userid=${userid}`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.SELECT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    }
};

module.exports = User;