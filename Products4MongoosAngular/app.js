const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyParser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyParser.json())

app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var products = {
        productId: req.body.product.productId,
        productName: req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description: req.body.product.description,
        price: req.body.product.price,
        starRating: req.body.product.starRating,
        imageUrl: req.body.product.imageUrl,
    }
    var products = new ProductData(products);
    products.save();
});
app.get('/products', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
        .then(function (products) {
            res.send(products);
        });
});
app.listen(3000, function () {
    console.log('listening to port 3000');
});