import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BucketsBox.scss';

import Modal from '../modals/adhocModal';
import { SpecialMention } from '../../sections/order';

import Button from '../button/button';
import {useNavigate} from 'react-router-dom'
BucketsBox.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    unit: PropTypes.string
}

export default function BucketsBox({ imgSrc, title, description, price, unit }) {
    const showModal = (e) => {
        setModal(true);
      };
    let navigate =  useNavigate();
    const [visibility, setModal] = useState(false);
    return (
        <div className='bucketsBoxComponent' onClick={showModal}>
            <div className='panel1'>
                <span className='title'>{title}</span>
                <span className='description'>{description} </span>
                <span className='price'>
                    {price} <span className='unit'>{unit}</span>
                </span>
            </div>
            <div className='panel2'>
                <img src={imgSrc} alt="Bucket Image" />
            </div>
            <Modal visible={visibility} hide={() => setModal(false)}>
                 <div className='modal-product d-flex flex-column'>
                    <div className='modalBucket container d-flex flex-column'> 
                        <div className='text-center d-flex justify-content-center' onClick={(event) => {event.stopPropagation();setModal(false)} } ><Button style={{backgroundColor:'#FFC700', minWidth:'250px'}}><i className="bi bi-chevron-left"></i> Back</Button></div>
                        <center><img src="images/product/big-buckets.png" className="bucketImage" width="80%" /></center>
                        <div className='americanSection'>
                            <span className='title1 font-weight-bold'>American Bucket</span>
                            <span className='title2'>62,00 <span className='title3'>RON</span> </span>
                            <span className='title4'>Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x...</span>
                            <span className='title5'>Package: 350/400 g</span>
                        </div>
                        <div className='selectOptionSection'>
                            <div className='borderWidth'></div>
                            <span className='title1'>Select an option</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='hotOption' name="hot_option" />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='hotOption' className='radioTxt1 hover'>Hot Wings</label>
                                            <label htmlFor='hotOption' className='radioTxt2 hover'>You may 11 Crispy strips</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>0,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth'></div>
                        </div>
                        <div className='selectOptionSection'>
                            <span className='title1'>Select an option</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id="stripOption" name="strip_option" />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='stripOption' className='radioTxt1 hover'>Crispy Strips</label>
                                            <label htmlFor='stripOption' className='radioTxt2 hover'>You may 3 Crispy strips</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>0,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth'></div>
                        </div>

                        {/* potato */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add the potatoes</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id="potatoOption1" name='potato_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='potatoOption1' className='radioTxt1 hover'>Small Potatoes</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>5,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id="potatoOption2" name='potato_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='potatoOption2' className='radioTxt1 hover'>Medium Potatoes</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id="potatoOption3" name='potato_option'  />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='potatoOption3' className='radioTxt1 hover'>Large Potatoes</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className='borderWidth marginTop20'></div>
                        </div>

                        {/* drink */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add the drink</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='drinkOption1' name='drink_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='drinkOption1' className='radioTxt1 hover'>Coca Cola Zero glass 0.5 L</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>5,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='drinkOption2' name='drink_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='drinkOption2' className='radioTxt1 hover'>Coca Cola Zero glass 0.5 L</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='drinkOption3' name='drink_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='drinkOption3' className='radioTxt1 hover'>Coca Cola Zero glass 0.5 L</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='drinkOption4' name='drink_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='drinkOption4' className='radioTxt1 hover'>Coca Cola Zero glass 0.5 L</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>
                        {/* sause */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add extra sause</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='sauseOption1' name='sause_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='sauseOption1' className='radioTxt1 hover'>Ketchup sause</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>10,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='sauseOption2' name='sause_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='sauseOption2' className='radioTxt1 hover'>Garlic sause</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='sauseOption3' name='sause_option'  />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='sauseOption3' className='radioTxt1 hover'>Ketchup sause</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='sauseOption4' name='sause_option'  />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='sauseOption4' className='radioTxt1 hover'>Garlic sause</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>
                        {/* add dessert */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add dessert</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" id='dessertOption1' name='dessert_option' />
                                        <div className='radioTxtBox'>
                                            <label htmlFor='dessertOption1' className='radioTxt1 hover'>Carrot Cake</label>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>

                        <div className='comment'>
                            <SpecialMention />
                        </div>

                        <div className='countBox'>
                            <img src="images/icons/minus.png" className="" alt="prev icon image"  />
                            <span className='section3_1_title'>1</span>
                            <img src="images/icons/plus.png" className="" alt="prev icon image"/>
                        </div>
                        
                    </div>
                    <div className='showMoreSection d-flex align-items-center justify-content-center text-center w-100 h-25'>
                        <div className='d-flex justify-content-center' onClick={()=>navigate('/food-ordering')}><Button style={{backgroundColor:'#FFC700',minWidth:'250px'}}>ADD TO BASKET 62,00 RON</Button></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}