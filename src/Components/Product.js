import React, {Component} from 'react';
import './css/Product.css'

//components


export default class Product extends Component {
    render() {
        return(
            <div className="product-main">
                <section className="product-box">
                    <img src="https://via.placeholder.com/300/09f/fff.png"></img>
                    <div className="product-info">
                        <section>
                            <h2>Product Name</h2>
                            <h2>Price $</h2>
                        </section>
                        <section className="product-buttons">
                            <button>Delete</button>
                            <button>Edit</button>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}