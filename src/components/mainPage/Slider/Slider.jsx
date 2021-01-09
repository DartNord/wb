import React from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';

import Img1 from './../../../images/MainPage/sliderIMG/slide1.jpg';
import Img2 from './../../../images/MainPage/sliderIMG/slide2.jpg';
import penImg from './../../../images/MainPage/sliderIMG/woodpen1.png';

function Slider() {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3}
    ];

    return (
        <div>
            <h3 className="OurWorks">Наши работы<img src={penImg}/></h3>
            <div className="stylingCarousel">
                <Carousel breakPoints={breakPoints} focusOnSelect={true} enableAutoPlay autoPlaySpeed={3500}>
                    <div className="imageCard"><img src={Img1}/></div>
                    <div className="imageCard"><img src={Img2}/></div>
                    <div className="imageCard"><img src={Img1}/></div>
                    <div className="imageCard"><img src={Img2}/></div>
                    <div className="imageCard"><img src={Img2}/></div>
                </Carousel>
            </div>
        </div>
    );
}

export default Slider;