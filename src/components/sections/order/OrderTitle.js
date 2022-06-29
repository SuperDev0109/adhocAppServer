import './OrderTitle.scss';

import PropTypes from 'prop-types';
import Button from '../../UI/button/button';
import { Link, useNavigate } from 'react-router-dom';
OrderTitle.propTypes = {
    title: PropTypes.string,
    backto: PropTypes.string
}

export default function OrderTitle({ title, backto }) {
    let navigate = useNavigate();
    return (
        <div className='OrderTitleSection'>
            <div className='container panel d-flex algin-items-center justify-content-center'>
                <div className='d-flex align-items-center' onClick={() => navigate(backto)}><Button style={{color:'black',paddingLeft:"5px"}}><i className="bi bi-chevron-left"></i> Back</Button></div>
                <span className='orderTitle'>{title}</span>
            </div>
        </div>
    )
}