const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    console.log("sreeraj");
    var product = {
        productId: req.body.name.productId,
        productName: req.body.name.productName,
        productCode: req.body.name.productCode,
        releaseDate: req.body.name.releaseDate,
        description: req.body.name.description,
        price: req.body.name.price,
        starRating: req.body.name.starRating,
        imageUrl: req.body.name.imageUrl,
    }
    var product = new ProductData(product);
    product.save();
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