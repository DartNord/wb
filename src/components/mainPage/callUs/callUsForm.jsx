import React from 'react';
import './callUsForm.css';

const CallUsForm = () => {
    return (
        <div className="call-us-form">
            <div className="call-us-image">
                <form id="send_form">
                    <input type="hidden" name="project_name" value="Masterskaya"/>
                    <input type="hidden" name="admin_email" value="stol.masterskaya@mail.ru"/>
                    <input type="hidden" name="form_subject" value="Заявка с сайта Столярная Мастерская"/>
                    <h3>ЗАКАЗАТЬ <span className="sp-color">ЗВОНОК</span></h3>
                    <h5>Ваше имя</h5>
                    <input id="name" type="text" placeholder="Введите имя:" name="Имя заказчика" required minLength="3"/>
                    <input id="phone" type="tel" className="phone_mask" placeholder="+7(999)999-9999"
                           onFocus="value='+7'" minLength="9" required pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" name="Номер заказчика " />
                    <input id="submit" type="submit" value="Отправить" />
                </form>
            </div>
        </div>
    )
};

export default CallUsForm;