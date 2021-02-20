import React from 'react';
import Css from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={Css.container}>
                <ul className={Css.ul}>
                    <li><a href="https://www.instagram.com/aleksei010488/?igshid=1tz0lgw312kk4" target="_blank">Instagram</a></li>
                    <li><a href="https://vk.com/id304550151" target="_blank">Vkontakte</a></li>
                    <li><a href="https://www.youtube.com/channel/UC5lddBOfrVUs8mB28eiPPZw" target="_blank">YouTube</a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=79174036393" target="_blank">WhatsUp</a></li>
                </ul>
            </div>
        </div>);
}

export default Header;