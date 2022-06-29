import './BucketBoxCount.scss';

import PropTypes from 'prop-types';

BucketBoxCount.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    count: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
}

export default function BucketBoxCount({ title1, title2, title3, count, price, currency }) {
    return (
        <div className='bucketBoxCountComponent'>
            <img className='product-img' src="images/product/buckets.png" alt="KFC Image" />
            <div className='panel'>
                <div className='section1'>
                    <span className='section1Title'>{title1}</span>
                    <span className="close">&times;</span>
                </div>
                <div className='section2'>
                    <span>{title2}</span>
                    <span>{title3}</span>
                </div>
                <div className='section3'>
                    <div className='section3_1'>
                        <img src="images/icons/minus.png" className="" alt="prev icon image" width="36px" height="36px" />
                        <span className='section3_1_title'>{count}</span>
                        <img src="images/icons/plus.png" className="" alt="prev icon image" width="36px" height="36px" />
                    </div>
                    <div className='section3_2'>
                        <span className='title1'>{price}</span>
                        <span className='title2'>{currency}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}