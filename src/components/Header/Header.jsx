import React from 'react';
import Menu from '../Menu/Menu.jsx';
import menuCss from '../Menu/Menu.module.css';
import css from './Header.module.css';

const Header = () => {

    function openMenu() {
            menuCss.sidebar.classList.toggle('active');
            menuCss.mContainer.classList.toggle('active');
        }

    return (
    <div>
        <div className={css.container}>
            <Menu openMenu={openMenu} />
            {/* <a href="#"><div className={css.menu}></div></a> */}
            <ul className={css.ul}>
                <li>instagram</li>
                <li>vkontakte</li>
                <li>youtube</li>
            </ul>
        </div>
    </div>);
}

export default Header;