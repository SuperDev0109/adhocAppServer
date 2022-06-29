import './SummaryCost.scss';
import PropTypes from 'prop-types';

SummaryCost.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
    total1BigSize: PropTypes.string,
    total2BigSize: PropTypes.string
}

export default function SummaryCost({ title, price, currency, total1BigSize, total2BigSize }) {
    return (
        <div className='summaryCostComponent'>
            <span className='panel1'>{title}</span>
            <div className='panel2'>
                <span className={`title1 ${total1BigSize}`}>{price}</span>
                <span className={`title2 ${total2BigSize}`}>{currency}</span>
            </div>
        </div>
    )
}