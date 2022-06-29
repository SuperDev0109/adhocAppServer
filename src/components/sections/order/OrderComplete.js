import './OrderComplete.scss';
import BucketAdd from '../../UI/order/BucketAdd';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function OrderComplete() {
    const settings_bucket = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 993,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
                breakpoint: 545,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
          ]
      };
    return (
        <div className='orderCompleteSection'>
            <span className='title'>Complete the order with:</span>
            <div className='orderCompleteSectionPanel'>
                <Slider {...settings_bucket}>
                    <BucketAdd title="Tomato and garlic sause" price="5,00" currency="RON" />
                    <BucketAdd title="Tomato and garlic sause" price="5,00" currency="RON" />
                    <BucketAdd title="Tomato and garlic sause" price="5,00" currency="RON" />
                    <BucketAdd title="Tomato and garlic sause" price="5,00" currency="RON" />
                    <BucketAdd title="Tomato and garlic sause" price="5,00" currency="RON" />
                </Slider>
            </div>
        </div>
    )
}