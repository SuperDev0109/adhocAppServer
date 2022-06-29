import React, { Fragment } from 'react';

import './ProductReview.scss'
import Avatar from '../../UI/avatar/avatar';
export default function ProductReview() {
    return (
        <Fragment>

            <div className='productReviewSection col-md-10 productReviewSectionDesktop'>
                <div className='panel1'>
                    <span className='title1'>4.9</span>
                    <img src="images/icons/star.png" alt="starIcon" width="20px" height="20px" />
                    <span className='title2'>(154) reviews</span>
                </div>
                <div className='panel2'>
                    <div className='check'><i className="bi bi-check fa-lg"></i></div>
                    <span className='title1'>Online payment</span>
                </div>
                <div className='panel3'>
                    <img src="images/icons/visa.png" alt="visaIcon" width="42px" height="14px" />
                    <img src="images/icons/mastercard.png" alt="mastercardIcon" width="31px" height="19px" />
                    <img src="images/icons/paypal.png" alt="paypalIcon" width="68px" height="18px" />
                </div>
            </div>

            <div className='productReviewSection productReviewSectionMobile d-none'>
                <div className='productReviewSectionMobilePanel1 position-relative'>
                    <div className='panel1 panel1Mobile'>
                        <div className='panel1MobileFirst'>
                            <span className='title1'>4.9</span>
                            <img src="images/icons/star.png" alt="starIcon" width="20px" height="20px" />
                        </div>
                        <span className='title2'><center>(154) reviews</center></span>
                    </div>
                    <div className='position-absolute'>
                        <Avatar url="/images/product/chief.png" alt="star-icon" style={{position:'absolute'}} />
                    </div>
                    <div className='panel2 panel2Mobile'>
                        <div className='check'><i className="bi bi-check fa-lg"></i></div>
                        <span className='title2'><center>Online payment</center></span>
                    </div>
                </div>

                <div className='panel3 ml-2'>
                    <img src="images/icons/visa.png" alt="visaIcon" width="56px" height="18px" />
                    <img className="mastercard" src="images/icons/mastercard.png" alt="mastercardIcon" width="40px" height="25px" />
                    <img src="images/icons/paypal.png" alt="paypalIcon" width="84px" height="22px" />
                </div>
            </div>
        </Fragment>
    )
}