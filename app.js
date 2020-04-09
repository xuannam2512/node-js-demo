const express = require('express');

const app = express();

console.log("Starting server");

app.get('/', function (req, res) {
    res.send('hello world')
})
  
app.listen(3000, () => {
    console.log("Listening on port 3000");
});