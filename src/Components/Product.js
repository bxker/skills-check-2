import React, {Component} from 'react';
import './css/Product.css';

//components


export default class Product extends Component {
    render(){
        return(
            <div className="product-main">
                <section className="product-box">
                    <img src={this.props.image} ></img>
                    <div className="product-info">
                        <section>
                            <h2>Name: {this.props.name}</h2>
                            <h2>Price: {this.props.price}</h2>
                        </section>
                        <section className="product-buttons">
                            <button onClick={() => this.props.deleteProduct(this.props.index)}>Delete</button>
                            <button>Edit</button>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}
