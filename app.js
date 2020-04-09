const express = require('express');

const app = express();

console.log("Starting server");

app.get('/', function (req, res) {
    res.send('hello world')
})
  
app.listen(8080, () => {
    console.log("Listening on port 8080");
});