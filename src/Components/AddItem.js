import React, {Component} from 'react';
import axios from 'axios';

//components
//import form
import Form from './Form'


export default class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            product_name: "",
            product_price: 0,
            image_url: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveItem = this.saveItem.bind(this)
        this.cancelButton = this.cancelButton.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveItem() {
        axios
        .post('/api/products', {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            image_url: this.state.image_url
        })
        .then((response) => {
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
            <>
                <Form 
                saveItem={this.saveItem}
                handleChange={this.handleChange} 
                cancelButton={this.cancelButton}
                product_name={this.state.product_name}
                product_price={this.state.product_price}
                image_url={this.state.image_url}
                />
            </>
        )
    }
}