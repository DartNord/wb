import React from 'react';
import AnimBtn from "./animBtn/animBtn";
import css from './Logo.module.css';

const Logo = () => {
    return (

    <div className={css.logo}>
        <AnimBtn />
    </div>);
}

export default Logo;