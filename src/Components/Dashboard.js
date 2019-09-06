import React, {Component} from 'react';
import './css/Dashboard.css'

//components
import Product from './Product'


export default class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard-main'>
                <h1>Dashboard</h1>
                <Product/>
            </div>
        )
    }
}