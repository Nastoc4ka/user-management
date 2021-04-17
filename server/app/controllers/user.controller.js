const {findUserById, getUserData, saveUserData} = require('../models');
const db = require("../../db");


exports.userProfiles = async (req, res) => {

    const queryProfiles = {
        name: 'get-profiles',
        text: 'SELECT * FROM profiles WHERE user_id = $1',
        values: [req.userId],
    };

    const {rows: profiles} = await db.query(queryProfiles);
    res.status(200).json(profiles);
};

exports.userAddProfile = async (req, res) => {

    const newProfile = {
        ...req.body,
        userId: req.userId
    };

    createProfile(newProfile).catch((e) => {
        return res.status(400).send({error: true, msg: 'Profile wasn`t added'})
    });

    res.status(201).json({success: true});
};

function createProfile(profile) {
    const query = `INSERT INTO profiles (name, gender, birthdate, city, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [profile.name, profile.gender, profile.birthdate, profile.city, profile.userId];
    return db.query(query, values);
}

exports.userUpdateProfile = async (req, res) => {

    const updateProfile = {
        text: 'UPDATE profiles SET name=$1, gender=$2, birthdate=$3, city=$4 WHERE id = $5',
        values: [req.body.name, req.body.gender, req.body.birthdate, req.body.city, req.body.id]
    };

    const {rows: profile} = await db.query(updateProfile);
    if (!profile) {
        return res.status(404).send({error: true, msg: 'Profile not found'})
    }

    res.status(200).json('Profile updated');
};

exports.userDeleteProfile = async (req, res) => {
    const deleteProfile = {
        name: 'delete-profile',
        text: 'DELETE FROM profiles WHERE id = $1 RETURNING *',
        values: [req.query.id],
    };

    const {rows: profileDeleted} = await db.query(deleteProfile);

    if (profileDeleted.length === 0) {
        return res.status(404).send({error: true, msg: 'Profile not found'})
    }

    res.status(200).json({success: true});
};