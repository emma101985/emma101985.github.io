// JavaScript source code using cookies with cookie-parser

//Modules needed
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

//middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//engine template
app.set('view engine', 'ejs');

//specify the path to views, the template folder
app.set('views', path.join(__dirname, 'templates'));

//routes
app.get('/', (req, res) => {
    res.render('cookies_form');
});

app.post('/add', (req, res) => {
    //get data from the form of cookies
    cookie_key = req.body.cookie_key;
    cookie_value = req.body.cookie_value;

    //set cookies
    res.cookie(cookie_key, cookie_value);
    const cookies = Object.entries(req.cookies);
    console.log(cookies);
    res.render('add_cookies', {
        cookies: cookies
    });
    
});


app.listen(3000, () => console.log("Server running on port 3000"));

