import React, {Component} from 'react';
import './css/Edit.css'

//components


export default class EditItem extends Component {
    render() {
        return(
            <div className='edit-main'>
                <section>
                    <img src="https://via.placeholder.com/300/09f/fff.png"></img>
                    <form>
                        <h2>Image URL:</h2>
                        <input></input>
                        <h2>Product Name:</h2>
                        <input></input>
                        <h2>Price:</h2>
                        <input></input>
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </form>
                </section>
            </div>
        )
    }
}