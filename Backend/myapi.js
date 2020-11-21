const express = require('express');
const mongoose = require('mongoose');
const app = express();
const requestUtils= require('./utils/requestUtils');
const productSchema= require('dataLoader');

app.use(express.json());

mongoose.connect('mongodb://localhost/greenDeck')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Exception Occured ", err));


const Product = mongoose.model('Product', productSchema);

app.post('/api/v1/greenDeck', (req, res) => {
    Product.find(requestUtils.createFilter(req.body))
        .then((data)=> res.send(data));
})

app.listen(5000, () => console.log("Listening......"));