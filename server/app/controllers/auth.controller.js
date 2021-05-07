const config = require("../config/auth.config");
const db = require("../../db");
const {getUserData, saveUserData} = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const defaultCategories = [
    {
        id: 1000,
        name: 'Spiritual',
        color: {value: 'pink', label: 'Pink', color: '#F6B09D', bgColor: '#EDC4BC'},
    },
    {
        id: 1001,
        name: 'Study',
        color: {value: 'purple', label: 'Purple', color: '#A2ACEB', bgColor: '#B2B7F6'},

    },
    {
        id: 1002,
        name: 'Sport',
        color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
    },
    {
        id: 1003,
        name: 'Health',
        color: {value: 'menthol', label: 'Menthol', color: '#B4F6A4', bgColor: '#C0EBC4'},

    },
];

exports.signup = async (req, res) => {

    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        isAdmin: req.body.isAdmin,
        last_active: new Date,
    };
    console.log(userData);
    const newPerson = await createUser(userData).catch((e) => {

        console.log(e.stack);
    });

    res.status(201).send({success: true, msg: 'User data added successfully'})
};

function createUser(user) {
    const query = `INSERT INTO users (username, email, password, is_admin, last_active) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [user.username, user.email, user.password, user.isAdmin, user.last_active];
    return db.query(query, values);
}

exports.signin = async (req, res) => {

    const userToAuth = req.body;

    const queryUser = {
        name: 'fetch-user',
        text: 'SELECT * FROM users WHERE email = $1',
        values: [userToAuth.email],
    };

    const {rows} = await db.query(queryUser);
    const user = rows[0];

    //check if the email exist or not
    if (!user) {
        return res.status(404).send({error: true, msg: 'User not found'})
    }

    const passwordIsValid = bcrypt.compareSync(
        userToAuth.password,
        user.password
    );

    if (!passwordIsValid) {
        return res.status(401).send({
            error: true,
            token: null,
            msg: "Invalid Password!"
        });
    }

    const accessToken = jwt.sign({id: user.id}, config.secret, {
        expiresIn: 60 * 60 * 24 // 1 day
    });
    res.send({success: true, isAdmin: user.is_admin, name: user.username, accessToken});
};

// exports.signRefreshToken = async (req, res) => {
//     const {rows: existUsers} = await db.query('SELECT * FROM users');
//
//     const userToAuth = req.body;
//
//     //check if the email exist or not
//     const user = existUsers.find(user => user.email == userToAuth.email);
//     if (!user) {
//         return res.status(404).send({error: true, msg: 'User not found'})
//     }
//
//     const passwordIsValid = bcrypt.compareSync(
//         userToAuth.password,
//         user.password
//     );
//
//     if (!passwordIsValid) {
//         return res.status(401).send({
//             error: true,
//             token: null,
//             msg: "Invalid Password!"
//         });
//     }
//
//     const accessToken = jwt.sign({id: user.id}, config.secret, {
//         expiresIn: 60 * 60 * 24 * 30 // 30 days
//     });
//
//     res.send({success: true, email: userToAuth.email, msg: 'token successfully refreshed', accessToken});
// };
