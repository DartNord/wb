import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Css from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={Css.container}>
                <Menu />
                <ul className={Css.ul}>
                    <li>instagram</li>
                    <li>vkontakte</li>
                    <li>youtube</li>
                </ul>
            </div>
        </div>);
}

export default Header;