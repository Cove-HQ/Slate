const express = require('express');
const router = express.Router();
const {get} = require('../manager.js');
// Kick a user from the server
router.post('/', (req, res) => {
    res.status(200).json({ list: get() });
})

module.exports = router;