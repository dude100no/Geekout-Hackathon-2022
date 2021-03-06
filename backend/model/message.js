const sequelize = require("./databaseConfig.js");
const { QueryTypes } = require('sequelize');
const { encrypt, decrypt } = require('../utils/aes.js');
const { SentimentAnalyzer } = require('node-nlp');

var Message = {
    addMsg : async (datetime, sender, recipient, msg, sentimentCallback, callback=(_, __) => {}) => {
        try {
            const sentiment = new SentimentAnalyzer({ language: 'en' });
            const result = await sentiment.getSentiment(msg);
            sentimentCallback(result);
            const sentimentScore = result.score;
            msg = encrypt(msg, process.env.AES_SECRET_KEY);
            var QUERY = `INSERT INTO user_messages (datetime, sender, recipient, message, sentiment) VALUES (${datetime}, ${sender}, ${recipient}, '${msg}', ${sentimentScore})`;
            var results = await sequelize.query(QUERY, { type: QueryTypes.INSERT });
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    },

    getAllUserMsg : async (userid, callback) => {
        try {
            let QUERY = `SELECT * FROM user_messages WHERE sender=${userid} OR recipient=${userid} ORDER BY datetime DESC`
            let results = await sequelize.query(QUERY, { type: QueryTypes.SELECT });
            results = results.map(result => ({...result, message: decrypt(result['message'], process.env.AES_SECRET_KEY)}));
            return callback(null, results);
        } catch (error) {
            console.log(`Connection unsuccessful ${error}`);
            return callback(error, null);
        };
    }
};

module.exports = Message;