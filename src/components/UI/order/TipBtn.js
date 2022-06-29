import './TipBtn.scss';
import PropTypes from 'prop-types';
TipBtn.propTypes = {
    price: PropTypes.string,
    currency: PropTypes.string,
    className: PropTypes.string
}

export default function TipBtn({ price, currency, className }) {
    return (
        <div className='tipBtnComponent'>
            <button className={`${className}`}>
                <span className='title1'>{price}</span>
                <span className='title2'>{currency}</span>
            </button>
        </div>
    )
}