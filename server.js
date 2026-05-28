const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Moderate with Slate.');
});

app.listen(port, () => {
  console.log(`Slate is running (on ${port} of caffine!!)`);
});


app.use(express.json());

app.use("/actions/kick", require('./paths/kick.js'));
app.use("/actions/warn", require('./paths/warn.js'));
app.use("/actions/ban", require('./paths/ban.js'));