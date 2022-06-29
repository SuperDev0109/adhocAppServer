import './ProductCategoryItem.scss';
import PropTypes from 'prop-types';

ProductCategoryItem.propTypes = {
    imgSrc: PropTypes.string,
    categoryid:PropTypes.string,
    categoryName: PropTypes.string,
}

export default function ProductCategoryItem({ imgSrc, categoryid, categoryName}) {
    categoryid = '#' + categoryid;
    return (
        <a className='productCategoryItemComponent' href={categoryid}>
            <img src="/images/product/RoundedPolygon.png" alt="product background"/>
            <img src={imgSrc} alt="product image kfc" className="product-image" />
            <span className='title'>{categoryName}</span>
        </a>
    )
}
