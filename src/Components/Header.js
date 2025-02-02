import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Header.css'

//components


export default class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>SHELFIE</Link></h1>
                <ul>
                    <Link to="/"><button>Dashboard</button></Link>
                    <Link to="/additem"><button>Add Item</button></Link>
                </ul>
            </div>
        )
    }
}