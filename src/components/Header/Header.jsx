import React from 'react';
import Menu from '../Menu/Menu.jsx';
import css from './Header.module.css';

const Header = (props) => {
    return (
    <div>
        <div className={css.container}>
            <Menu openMenu={props.openMenu} />
            <ul className={css.ul}>
                <li>instagram</li>
                <li>vkontakte</li>
                <li>youtube</li>
            </ul>
        </div>
    </div>);
}

export default Header;