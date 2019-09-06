import React, {Component} from 'react';
import axios from 'axios';
import './css/Dashboard.css'

//components
import Product from './Product'


export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            product_name: "",
            product_price: "",
            image_url: ""
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

    deleteProduct(id) {
        axios
        .delete(`api/products/${id}`)
        .then(response => {
            this.setState({products: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.products)
        const {products} = this.state
        return(
            <div className='dashboard-main'>
                <h1>Dashboard</h1>
                {products ? products.map((products, id) => (
                    <Product 
                        deleteProduct={this.deleteProduct}
                        name={products.product_name}
                        price={products.product_price}
                        image={products.image_url}
                        id={id}
                    />
                )): <p>Loading</p>}
            </div>
        )
    }
}