import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
    <div>
        <div className={css.container}>
            <a href="#"><div className={css.menu}></div></a>
            <ul className={css.ul}>
                <li>instagram</li>
                <li>vkontakte</li>
                <li>youtube</li>
            </ul>
        </div>
    </div>);
}

export default Header;