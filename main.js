const express = require("express");
const app = express()

let admin = require("./admin")

// main page
app.get('/', function (req, res) {
    res.send("Hi, Asghar");
})

// Test XSS vulnerability
app.get('/shop/notsafe', function (req, res) {
    let product = req.query.product;
    res.send(`<h1>${product}</h1>`);
})

// test for fix bug 
app.get('/admin', function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username == "admin" && password == 12211) {
        res.status(200).json({
            data: admin,
            success: true
        });
    } else {
        res.send("username and password is flase");
    }

})

// Open redirec test 
// app.get('/blog', function (req, res) {
//     let redirect = req.query.direc
//     res.writeHead(301, {location: "/"})
    
// })

// app port
app.listen(2323, () => {
    console.log("App is running on port 2323")
})