// JavaScript source code using EJS
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

var path = require('path');

//engine template that is used is EJS
app.set('view engine', 'ejs');

//specify the path to your views
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('fill_form');
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;
    const response = `Welcome ${name ? name : "person"}. ${age ? `You are ${age} years old!` : ""}`;
    res.render('form_result', {
        response : response
    });
})

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
