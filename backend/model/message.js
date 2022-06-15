const sequelize = require("./databaseConfig.js");
const { QueryTypes } = require('sequelize');

var Message = {
    addMsg : async (datetime, sender, recipient, msg, callback) => {
        try {
            var QUERY = `INSERT INTO user_messages (datetime, sender, recipient, msg) VALUES ('${datetime}', '${sender}', '${recipient}', '${msg}')`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.INSERT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    }
};

module.exports = Message;