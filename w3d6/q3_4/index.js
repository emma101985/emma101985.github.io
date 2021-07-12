// JavaScript source code using EJS

// required modules
var express = require('express');
var app = express();
var path = require('path');

// using EJS template engine
app.set('view engine', 'ejs');

//specify the directory for the views
app.set('views', path.join(__dirname, 'views'));

//get products
app.get('/product', (req, res) => {
    //product array
    var products = [
        {id: "001", name: "Acoustic Guitar", price: 1500, description: "Jazz Acoustic Guitar with tuner and bag" },
        {id: "002", name: "Electric Guitar", price: 2500, description: "Blues Guitar with used in Jazz music too" },
        {id: "003", name: "Electric Drum", price: 3500, description: "Electric Drum with all drum set" },
        {id: "004", name: "Ukulele", price: 500, description: "Acoustic ukulele" },
        {id: "005", name: "Bass Guitar", price: 1500, description: "Electric Bass Guitar with 5 strings, tuner and bag" }

    ];

    res.render('pages/product', {
        products : products
    });

});



//get products
app.get('/shoppingCart', (req, res) => {
    //product array
    var shoppingProducts = [
        { name: "Acoustic Guitar", price: 1500, quantity : 3},
        { name: "Electric Guitar", price: 2500, quantity : 2},
       
        { name: "Ukulele", price: 500, quantity : 1 },
       

    ];

    var total = 0;
    for (produit of shoppingProducts){
        total += produit.price;
    }

    res.render('pages/shoppingCart', {
        shoppingProducts: shoppingProducts,
        total : total
    });

});

//post product in the cart
app.post('/addToCart', (req, res) => {
    console.log("Still in construction");
    res.render('pages/addToCart');
});


app.listen(3000, () => console.log("server is running on port 3000"));

