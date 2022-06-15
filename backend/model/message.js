const sequelize = require("./databaseConfig.js");
const { QueryTypes } = require('sequelize');
const { encrypt } = require('../utils/aes.js');

var Message = {
    addMsg : async (datetime, sender, recipient, msg, callback=(_, __) => {}) => {
        try {
            // TODO: add sentiment analysis here
            msg = encrypt(msg, process.env.AES_SECRET_KEY);
            var QUERY = `INSERT INTO user_messages (datetime, sender, recipient, message) VALUES (${datetime}, ${sender}, ${recipient}, '${msg}')`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.INSERT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    }
};

module.exports = Message;