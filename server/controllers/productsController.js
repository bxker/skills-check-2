
let getAll = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.readProducts()
    .then(products => {
        res.status(200).json(products)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong - 500'})
        console.log(err)
    })
}

let deleteProduct = (req, res) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;

    dbInstance.deleteProduct(id)
    .then(product => {
        res.status(200).json(product)
        console.log(product)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong -500'})
        console.log(err)
    })
}

let saveItem = (req, res) => {
    const dbInstance = req.app.get('db');
    const {product_name, product_price, image_url} = req.body;

    dbInstance.saveItem(product_name, product_price, image_url)
    .then( () => res.sendStatus(200))
    .catch (err => {
        res.status(500).send({errorMessage: 'Something went wrong - 500'})
        console.log(err)
    })
}

let editProduct = (req, res) => {
    const dbInstance = req.app.get('db')
    const {params} = req.params;
    const {product_name, product_price, image_url} = req.body;

    dbInstance.editProduct(product_name, product_price, image_url, params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong - 500'})
        console.log(err)
    })
}

module.exports = {
    getAll,
    deleteProduct,
    saveItem,
    editProduct
}
