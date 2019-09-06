import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//components


export default class Header extends Component {
    render() {
        return(
            <>
                <h1>Header</h1>
                <ul>
                    <Link to="/"><li>Dashboard</li></Link>
                    <Link to="/additem"><li>Add Item</li></Link>
                </ul>
            </>
        )
    }
}