import './BucketAdd.scss';


import PropTypes from 'prop-types';
import Button from '../../UI/button/button'
BucketAdd.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string
}

export default function BucketAdd({ title, price, currency }) {
    return (
        <div className='bucketAddComponent'>
            <img src="images/order/tomato.png" />
            <span className='title1'>{title}</span>
            <div className='panel'>
                <div className='section1'>
                    <span className='section1Title1'>{price}</span>
                    <span className='section1Title2'>{currency}</span>
                </div>
                <div className='section2'>
                    <Button>ADD</Button>
                </div>
            </div>
        </div>
    )
}