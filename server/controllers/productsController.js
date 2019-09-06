
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
    .then(products => res.status(200).json(products))
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong -500'})
        console.log(err)
    })
}

module.exports = {
    getAll,
    deleteProduct
}
