const express = require('express')

const app = express()

app.get('/get', (req, res) => {
  res.send({"message": "I am the get request page"});
  console.log('I am the get request page')
});

module.exports = app;