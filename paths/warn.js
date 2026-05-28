const express = require('express');
const router = express.Router();
const { add } = require('../manager.js');

router.post('/', (req, res) => {
  let {username, reason} = req.body;

  add('warn', username, reason);

  res.status(200).json({ message: 'User added to queue. Awaiting warn.' });
});

module.exports = router;