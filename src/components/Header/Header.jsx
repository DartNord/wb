import React from 'react';
import Css from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={Css.container}>
                <ul className={Css.ul}>
                    <li>instagram</li>
                    <li>vkontakte</li>
                    <li>youtube</li>
                    <li>whats-up</li>
                </ul>
            </div>
        </div>);
}

export default Header;