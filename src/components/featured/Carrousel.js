import React from 'react';
import Slider from 'react-slick';

import Slide1 from '../../resources/images/slide_one.jpg';
import Slide2 from '../../resources/images/slide_two.jpg';
import Slide3 from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

  const config = {
    dots: true,
    infinite:true,
    autoplay: true,
    speed: 500
  }

  return (
    <div className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}>

      <Slider {...config}>
        <div>
          <div className="carrousel_image"
          style={{
            height:`${window.innerHeight}px`,
            background: `url(${Slide1})`
          }}
        />
        </div>
        <div>
          <div className="carrousel_image"
          style={{
            height:`${window.innerHeight}px`,
            background: `url(${Slide2})`
          }}
        />
        </div>
        <div>
          <div className="carrousel_image"
          style={{
            height:`${window.innerHeight}px`,
            background: `url(${Slide3})`
          }}
        />
        </div>
      </Slider>  
    </div>
  );
};

export default Carrousel;