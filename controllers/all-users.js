const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//users index - lists all users
router.get('/', async (req, res) => {

    const allUsers = await User.find()
    console.log(allUsers)
    res.render('../views/users/all-users-index.ejs', {
        allUsers: allUsers
    })
});

//user show page - shows user's pantry
router.get('/:userId', async (req, res) => {
    const foundUser = await User.findById(req.params.userId);

    res.render('users/show.ejs', {
        foundUser: foundUser
    })
})

module.exports = router;