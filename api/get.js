import express from 'express'

const app = express()

app.get('/get', (req, res) => {
  res.send({"message": "hello World"});
  console.log('working')
});

module.exports = app;