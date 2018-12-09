import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from './Menu/Menu';
import links from '../../data/menuLinks.json';

const Header = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo center">React-route-test</Link>
                <Menu links={links} className='right' />
            </div>
        </nav>
    )
}

export default withRouter(Header);