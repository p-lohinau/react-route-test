import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuLink = ({ to, name, type }) => {
    return (
        <li>
            {type === "link" ? <Link to={to}>{name}</Link> : <NavLink to={to}>{name}</NavLink>}
        </li>
    )
}

MenuLink.defaultProps = {
    link: '',
    name: ''
}

MenuLink.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}

export default MenuLink;