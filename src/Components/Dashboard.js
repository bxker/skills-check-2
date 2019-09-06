import React, {Component} from 'react';
import axios from 'axios';
import './css/Dashboard.css'

//components
import Product from './Product'


export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        axios
        .get('/api/products')
        .then(response => {
            this.setState({products: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteProduct(index) {
        axios
        .delete(`api/products/${index}`)
        .then(response => {
            this.setState({products: response.data})
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const {products} = this.state
        return(
            <div className='dashboard-main'>
                <h1>Dashboard</h1>
                {products ? products.map((products, index) => (
                    <Product 
                        products={this.products}
                        deleteProduct={this.deleteProduct}
                        name={products.product_name}
                        price={products.product_price}
                        image={products.image_url}
                        index={index}
                    />
                )): <p>Loading</p>}
            </div>
        )
    }
}