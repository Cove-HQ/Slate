const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Moderate with Slate.');
});

function verifyReq(req, res, next) {
const key = req.body.key
if(key !== process.env.key) return res.status(401).json({message: "Slate: You are not authorized to make this request. Please provide a valid key."});
next();
}

app.post("/*", verifyReq);

app.use("/actions/kick", require('./paths/kick.js'));
app.use("/actions/warn", require('./paths/warn.js'));
app.use("/actions/ban", require('./paths/ban.js'));
app.use("/actions/process", require('./paths/process.js'));
app.use("/processing/get", require('./paths/getAwaiting.js'));

app.listen(port, () => {
  console.log(`Slate is running (on ${port}mg of caffine/second)`);
});