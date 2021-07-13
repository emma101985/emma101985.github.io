const express = require('express');
const path = require("path");
const session = require("express-session");
const app = express();
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));


app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" name="age" id="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
        </html>`
    );
});

app.get('/output', (req, res) => {
    //sess = req.session;
    //var sess.name = req.query;
    const response = `Welcome ${sess.name ? sess.name : "person"}. ${sess.age ? `You are ${sess.age} years old!` : ""}`;
    res.send(response);
})

app.post('/result', (req, res) => {
    sess = req.session; //session variable
    sess.name = req.body.name; //name is now a session variable through sess.name
    sess.age = req.body.age;
    //const {name, age} = req.body;
    res.redirect(303, '/output');
})

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
