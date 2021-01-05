import React from 'react';
import './Menu.css'

const Menu = (props) => {

    return (
    <div>
        <input type="checkbox" id="side-checkbox"/>
        <div className="side-panel">
            <label className="side-button-2" htmlFor="side-checkbox">+</label>
            <div className="side-title">Меню</div>
            <ul>
                <li>Главная</li>
                <li>Наши работы</li>
                <li>Свяжитесь с нами</li>
                <li>О компании</li>
            </ul>
        </div>
        <div className="side-button-1-wr">
            <label className="side-button-1" htmlFor="side-checkbox">
                <div className="side-b side-open">Меню</div>
                <div className="side-b side-close">Закрыть</div>
            </label>
        </div>
    </div>);
}

export default Menu;