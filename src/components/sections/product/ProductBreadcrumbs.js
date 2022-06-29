import React, { Fragment } from 'react';
import './ProductBreadcrumbs.scss';

export default function ProductBreadcrumbs() {
    return (
        <Fragment>
            <div className='productBreadcrumbsSection'>
                <span className='title'>Restaurant</span>
                <span className='title'> <img src='images/product/rightArrow.png' /> </span>
                <span className='title'>{process.env.REACT_APP_RESTAURANT_NAME}</span>
            </div>
        </Fragment>
    )
}
