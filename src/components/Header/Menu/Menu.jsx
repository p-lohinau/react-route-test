import React from 'react';
import MenuLink from './MenuLink';
import PropTypes from 'prop-types';

const Menu = ({ links, className }) => {
    const menu = links.map((link, index) =>
        <MenuLink key={index} {...link} />
    );
    return (
        <ul className={className}>
            {menu}
        </ul>
    )
}

Menu.defaultProps = {
    links: [],
    className: ''
}

Menu.propTypes = {
    links: PropTypes.array,
    className: PropTypes.string
}

export default Menu;