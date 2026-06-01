const express = require('express');
const router = express.Router();
const {get} = require('../manager.js');

router.get('/', async (req, res) => {
    const data = await get();
    res.status(200).json({ list: data });
})

module.exports = router;