import React from 'react';
import css from './Menu.module.css';

const Menu = (props) => {

    return (
    <div>
        <div className={css.container} id={css.mContainer}></div>
        <div id={css.sidebar}>
            <div className={css.toggleBtn} onClick={props.openMenu()} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>Main menu</li>
                <li><a href='/'>First page</a></li>
                <li><a href='/'>Second page</a></li>
                <li><a href='/'>About us</a></li>
            </ul>
        </div>
    </div>);
}

export default Menu;