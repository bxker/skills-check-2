import React, {Component} from 'react';
import './css/Product.css';

//components


export default function Product(props) {
        return(
            <div className="product-main">
                <section className="product-box">
                    <img src={props.image} ></img>
                    <div className="product-info">
                        <section>
                            <h2>Name: {props.name}</h2>
                            <h2>Price: {props.price}</h2>
                        </section>
                        <section className="product-buttons">
                            <button onClick={() => props.deleteProduct(props.id)}>Delete</button>
                            <button>Edit</button>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
