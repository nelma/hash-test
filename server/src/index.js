const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

//apidoc
app.use(express.static(path.resolve(__dirname, './apidoc/')));
app.get('/apidoc', (req, res) => {
  res.sendFile(path.resolve(__dirname, './apidoc/index.html'));
});

app.listen(3000, () => {
  console.log('UP on port 3000');
});

module.exports = app;
