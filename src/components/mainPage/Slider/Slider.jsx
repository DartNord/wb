import React from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";

import penImg from './../../../images/MainPage/sliderIMG/woodpen1.png';

function Slider(state) {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 700, itemsToShow: 2},
        {width: 1050, itemsToShow: 3},
        {width: 1400, itemsToShow: 4}
    ];

    return (
        <div>
            <h3 className="OurWorks">Наши работы<img src={penImg}/></h3>
            <div className="stylingCarousel">
                <Carousel breakPoints={breakPoints} focusOnSelect={true} enableAutoPlay autoPlaySpeed={3000}>
                    <Item className="imageCard"><img src={state.images[0]}/></Item>
                    <Item className="imageCard"><img src={state.images[1]}/></Item>
                    <Item className="imageCard"><img src={state.images[2]}/></Item>
                    <Item className="imageCard"><img src={state.images[3]}/></Item>
                    <Item className="imageCard"><img src={state.images[4]}/></Item>
                    <Item className="imageCard"><img src={state.images[5]}/></Item>
                    <Item className="imageCard"><img src={state.images[6]}/></Item>
                    <Item className="imageCard"><img src={state.images[7]}/></Item>
                    <Item className="imageCard"><img src={state.images[8]}/></Item>
                    <Item className="imageCard"><img src={state.images[9]}/></Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Slider;