const data= require('./greendeckdata');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenDeck')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Exception Occured ", err));

const productSchema = new mongoose.Schema({
    name: String,
    brand: {},
    price:{},
    discount: Number,
    stock:{},
    created_at: Date
});

const Product = mongoose.model('Product', productSchema);

const formattedData= data.map(el=>{
    const formattedEl= {...el,
        discount: (el.price.regular_price.value - el.price.offer_price.value)/el.price.regular_price.value * 100,
        created_at: new Date(el.created_at.$date)
    }
    delete formattedEl._id;
    return formattedEl;
});

formattedData.forEach(data=>{
    let product= new Product(data);
    product.save().then(_=> console.log('Uploaded'));
})

module.exports= productSchema;