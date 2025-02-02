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
        this.cancelButton = this.cancelButton.bind(this)
    }

    handleChange2(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editItem() {
        axios
        .put(`/api/products/${this.props.location.state.id}`, {
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

    cancelButton() {
        this.setState({
            product_name: "",
            product_price: 0,
            image_url: ""
        })
    }

    render() {
        return(
            <div className='edit-main'>
                <h1>Edit Item</h1>
                <section>
                    <img src={this.state.image_url}></img>
                    <div>
                        <h2>Image URL:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.image_url} name='image_url'></input>
                        <h2>Product Name:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.product_name} name='product_name'></input>
                        <h2>Price:</h2>
                        <input type="text" onChange={this.handleChange2} value={this.state.product_price} name='product_price'></input>
                        <button onClick={this.cancelButton}>Cancel</button>
                        <button onClick={this.editItem}>Save Changes</button>
                    </div>
                </section>
            </div>
        )
    }
}