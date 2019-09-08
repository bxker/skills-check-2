import React, { Component } from 'react';
import axios from 'axios';
import './css/Dashboard.css'

//components
import Product from './Product'


export default class Dashboard extends Component {
    constructor() {
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
                this.setState({ products: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteProduct(id) {
        axios
            .delete(`/api/products/${id}`)
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { products } = this.state
        return (
            <div className='dashboard-main'>
                <h1>Dashboard</h1>
                {products ? products.map((item) => (
                    <Product
                        products={this.products}
                        deleteProduct={this.deleteProduct}
                        name={item.product_name}
                        price={item.product_price}
                        image={item.image_url}
                        id={item.id}
                    />
                )) : <p>No Products To Display</p>}
            </div>
        )
    }
}