const sequelize = require("./databaseConfig.js");
const { QueryTypes } = require('sequelize');
const { encrypt } = require("../utils/aes.js");

var User = {
    getUserInfo : async (userid, callback) => {
        try {
            var QUERY = `SELECT * FROM user WHERE userid=${userid}`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.SELECT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    },

    addUserInfo : async (firstname, lastname, type, callback) => {
        try {
            var QUERY = `INSERT INTO user (first_name, last_name, type) VALUES ('${firstname}', '${lastname}', '${type}')`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.INSERT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    },

    getUserSentiment : async (sender, recipient, callback) => {
        try {
            var QUERY = `SELECT AVG(d.sentiment) 'Average Sentiment' FROM (SELECT sentiment FROM user_messages WHERE sender=${sender} AND recipient=${recipient} ORDER BY datetime DESC LIMIT 100) d`;
            // var QUERY = `SELECT sentiment FROM user_messages WHERE sender=${sender} AND recipient=${recipient} ORDER BY datetime DESC LIMIT 100`
            var results = await sequelize.query(QUERY, { type: QueryTypes.SELECT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    }
};

module.exports = User;