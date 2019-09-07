import React, {Component} from 'react';
import axios from 'axios';
import './css/Edit.css';

//components


export default class EditItem extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            product_name: "",
            product_price: 0,
            image_url: ""
        }
        this.handleChange2 = this.handleChange2.bind(this)
        this.editItem = this.editItem.bind(this)
    }

    componentDidMount(){
        axios
        .get('/api/products')
        .then(response => {
            this.setState({
                products: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    handleChange2(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editItem(id) {
        axios
        .put(`/api/products/${id}`, {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            image_url: this.state.image_url
        })
        .then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        return(
            <div className='edit-main'>
                <section>
                    <img src="https://via.placeholder.com/300/09f/fff.png"></img>
                    <div>
                        <h2>Image URL:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.image_url} name='image_url'></input>
                        <h2>Product Name:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.product_name} name='product_name'></input>
                        <h2>Price:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.product_price} name='product_price'></input>
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </section>
            </div>
        )
    }
}