const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: false }));

let admin = require("./admin");

// main page
app.get("/", function (req, res) {
  res.send("Hi, Asghar");
});

// Test XSS vulnerability
app.get("/shop/notsafe", function (req, res) {
  let product = req.query.product;
  res.send(`<h1>${product}</h1>`);
});

// test for fix bug
app.get("/admin", function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  if (username == "admin" && password == 12211) {
    res.status(200).json({
      data: admin,
      success: true,
    });
  } else {
    res.send("username and password is flase");
  }
});

// Open redirec test
app.get('/blog', function (req, res) {
    let redirectURI = req.query.direct;
    res.redirect(redirectURI)
})


// app port
app.listen(80, () => {
  console.log("App is running on port 2323");
});
