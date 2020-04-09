const express = require('express');

const app = express();

console.log("Starting server");

app.get('/', function (req, res) {
    res.send('hello world')
})
  
const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});