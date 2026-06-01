const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Moderate with Slate.');
});

app.use("/actions/kick", require('./paths/kick.js'));
app.use("/actions/warn", require('./paths/warn.js'));
app.use("/actions/ban", require('./paths/ban.js'));
app.use("/actions/process", require('./paths/process.js'));
app.use("/processing/get", require('./paths/getAwaiting.js'));

app.listen(port, () => {
  console.log(`Slate is running (on ${port}mg of caffine/second)`);
});