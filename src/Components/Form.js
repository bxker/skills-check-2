import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Form.css'

//components


export default class Form extends Component {
    render() {
        const {handleChange, product_price, product_name, image_url, saveItem} = this.props;
        return(
            <div className='form-main'>
                <h1>Add Item</h1>
                <section>
                    <img src={image_url}></img>
                    <div>
                        <h2>Image URL:</h2>
                        <input type="text" onChange={handleChange} value={image_url} name='image_url'></input>
                        <h2>Product Name:</h2>
                        <input type="text" onChange={handleChange} value={product_name} name='product_name'></input>
                        <h2>Price:</h2>
                        <input type="text" onChange={handleChange} value={product_price} name='product_price'></input>
                        <button>Cancel</button>
                        <button onClick={saveItem}><Link to="/">Save Changes</Link></button>
                    </div>
                </section>
            </div>
        )
    }
}