import React from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';

import Img1 from './../../../images/MainPage/sliderIMG/pic1.jpg';
import Img2 from './../../../images/MainPage/sliderIMG/pic2.jpg';
import Img3 from './../../../images/MainPage/sliderIMG/pic3.jpg';
import Img4 from './../../../images/MainPage/sliderIMG/pic4.jpg';
import Img5 from './../../../images/MainPage/sliderIMG/pic5.jpg';
import Img6 from './../../../images/MainPage/sliderIMG/pic6.jpg';
import Img7 from './../../../images/MainPage/sliderIMG/pic7.jpg';
import Img8 from './../../../images/MainPage/sliderIMG/pic8.jpg';
import Img9 from './../../../images/MainPage/sliderIMG/pic9.jpg';
import Img10 from './../../../images/MainPage/sliderIMG/pic10.jpg';

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
                <Carousel breakPoints={breakPoints} focusOnSelect={true} enableAutoPlay autoPlaySpeed={3000}>
                    <div className="imageCard"><img src={Img1}/></div>
                    <div className="imageCard"><img src={Img2}/></div>
                    <div className="imageCard"><img src={Img3}/></div>
                    <div className="imageCard"><img src={Img4}/></div>
                    <div className="imageCard"><img src={Img5}/></div>
                    <div className="imageCard"><img src={Img6}/></div>
                    <div className="imageCard"><img src={Img7}/></div>
                    <div className="imageCard"><img src={Img8}/></div>
                    <div className="imageCard"><img src={Img9}/></div>
                    <div className="imageCard"><img src={Img10}/></div>
                </Carousel>
            </div>
        </div>
    );
}

export default Slider;