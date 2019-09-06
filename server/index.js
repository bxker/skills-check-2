const express = require('express');
const app = express();

//requiring all the stuff
const massive = require('massive');
require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

//requiring functions
const {getAll, deleteProduct, saveItem, editProduct} = require('./controllers/productsController')

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
}).catch(err => {
    console.log(err);
})

app.use(express.json());

//endpoints
//gets all products
app.get('/api/products', getAll);
//deletes specific product
app.delete('/api/products/:id', deleteProduct)
//adds 
app.post('/api/products', saveItem)
//edit
app.put('/api/products/:id', editProduct)


app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));