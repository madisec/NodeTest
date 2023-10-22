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
// Fuuz for amin pannel
// app.get('/support/admin', function (req, res) {
//     let usernameAdmin = req.query.username_admin
//     let passwordAdmin = req.query.password_Admin
//     if (usernameAdmin == "admin" && passwordAdmin == "75859") {
//         res.send("FLAG:456b7016a916a4b178dd72b947c152b7");

//     } else if (usernameAdmin == "admin" && passwordAdmin != "75859") {
//         res.status(200).send("Password is false!!!!!!")
        
//     } else if (usernameAdmin != "admin" && passwordAdmin == "75859") {
//         res.status(200).send("Username is false!!!!!");
//     } else {
//         res.send("Hi baybe, How are you?")
//     }
// })

// Open redirec test 
// app.get('/blog', function (req, res) {
//     let redirect = req.query.direc
//     res.writeHead(301, {location: "/"})
    
// })

// app port
app.listen(2323, () => {
    console.log("App is running on port 2323")
})