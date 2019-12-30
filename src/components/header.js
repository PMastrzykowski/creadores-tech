import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => <header id="app-header" >
    <div className='navigation'>
    <Link to='/'><div className='navigation-logo' /></Link>
        <div className='navigation-menu'>
        <Link to='/estimate'><button className='round'>Estimate project</button></Link>
            <button>Client portal</button>
            <button>Contact</button>
        </div>
    </div>
</header>

export default Header;