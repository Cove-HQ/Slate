const express = require('express');
const router = express.Router();
const { add } = require('../manager.js');

router.post('/', (req, res) => {
  let {username, reason} = req.body;

  add('ban', username, reason);

  res.status(200).json({ message: 'User added to queue. Awaiting ban.' });
});

module.exports = router;