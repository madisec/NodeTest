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

// Fuuz for amin pannel
app.get('/support/admin', function (req, res) {
    let usernameAdmin = req.query.username_admin
    let passwordAdmin = req.query.password_Admin
    if (usernameAdmin == "admin" && passwordAdmin == "75859") {
        res.status(200).json({
            data: admin,
            success: true
        });

    } else if (usernameAdmin == "admin" && passwordAdmin != "75859") {
        res.send("Password is false!!!!!!")
        res.send.status(403);
    } else if (usernameAdmin != "admin" && passwordAdmin == "75859") {
        res.send("Username is false!!!!!");
        res.send.status(403);
    } else {
        res.send("Hi baybe, How are you?")
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