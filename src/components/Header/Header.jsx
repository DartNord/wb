import React from 'react';
import Css from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={Css.container}>
                <ul className={Css.ul}>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">vkontakte</a></li>
                    <li><a href="#">youtube</a></li>
                    <li><a href="#">whats-up</a></li>
                </ul>
            </div>
        </div>);
}

export default Header;