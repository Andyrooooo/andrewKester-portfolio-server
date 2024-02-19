const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({"message": "I am the main page"});
  console.log('I am the main page')
});

module.exports = app;