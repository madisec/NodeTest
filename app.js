const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('App test 2')
})



app.listen(2323, () => {
    console.log("Test app is running on port 2323");
})