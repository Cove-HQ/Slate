const express = require('express');
const router = express.Router();
const {process} = require('../manager.js');
// Kick a user from the server
router.post('/', (req, res) => {
  const { username,action } = req.body;
  process(action, username);
})

module.exports = router;