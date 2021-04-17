const {getUserData} = require("../models");
const db = require("../../db");

checkDuplicateUsernameOrEmail = async (req, res, next) => {

    const {rows: existUsers} = await db.query('SELECT email, email FROM users');

    const userToAuth = req.body;

    //check if the email exist or not
    const username = existUsers.find(user => user.email === userToAuth.email);
    const email = existUsers.find(user => user.email === userToAuth.email);

    if (username) {
        res.status(400).send({msg: "Username is already in use!"});
        return;
    }

    if (email) {
        res.status(400).send({msg: "Email is already in use!"});
        return;
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
