import React, { useState } from 'react';
import StarIcon from '../icons/starIcon';
import './card.scss';
import Avatar from '../avatar/avatar';
import { Link, useNavigate } from 'react-router-dom';
const Card = (props) => {
    const [userInfo, setUserInfo] = useState({searchres: '', searchmenu: ''});
    let navigate = useNavigate();
    const onValueChanged = (e) =>{
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
            <div className='card-container' >
                <div onClick = {() => navigate('/product')}>
                    <div className='card-top'>
                        <img className='card-back' src="/images/product/res_img.png" alt="Restaurant"/>
                        <div className='percent'>20%</div>
                        <Avatar url="/images/product/chief.png" alt="star-icon" style={{position:'absolute'}}></Avatar>
                        <div className='title'>KFC</div>
                    </div>
                    <div className='card-bottom'>
                        <div>
                            From 11:00 - 17:00
                        </div>
                        <div className='rate'>
                            4.9 <StarIcon/>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Card;