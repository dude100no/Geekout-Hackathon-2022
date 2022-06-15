const jwt = require("jsonwebtoken");
const { key } = require("../config.js");

var check = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined || !authHeader.startsWith("Bearer ")) {
        res.status(401).send();
        return;
    }
    const token = authHeader.replace("Bearer ", "");
    jwt.verify(token, key, { algorithms: ["HS256"] }, (error, decodedToken) => {
        if (error) {
            res.status(401).send();
            return;
        }
        // req.decodedToken = decodedToken;
        // console.log(decodedToken)
        req.decodedUserid = decodedToken.userid;
        req.decodedType = decodedToken.type;
        // console.log(req.decodedUserid, req.decodedType)
        next();
    });
};
module.exports = check;