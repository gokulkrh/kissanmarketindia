import { React, Component } from 'react'
import './styles/header.css'
import logo from '/home/gokul/Projects/kissanmarketindia/frontend/src/images/logo.png';

export default class Header extends Component{
    render() {
        return (
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <button className='user-buttons'>Login</button>
                <button className='user-buttons'>Register</button>
                <button>Add Product</button>
            </div>
        );
    }
}