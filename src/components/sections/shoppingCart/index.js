import './shoppingCart.scss';

import Button from '../../UI/button/button';
import { useNavigate } from 'react-router-dom';
export default function ShoppingCart() {
    let navigate=useNavigate();
    return (
        <div className='shoppingCartPageSection' >
            <img src="images/cart/emptycart.png" alt="404 page" />
            <p className='title1'>There is nothing in your cart yet...</p>
            <div className='d-flex justify-content-center'><Button style={{backgroundColor:'#FFC700'}} onClick={()=>{navigate('/')}}> Start Shopping </Button></div>
        </div>
    )
}