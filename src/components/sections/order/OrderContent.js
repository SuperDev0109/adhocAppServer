import './OrderContent.scss';
import BucketBoxCount from '../../UI/order/BucketBoxCount';

import Avatar from '../../UI/avatar/avatar';
import Button from '../../UI/button/button';


export default function OrderContent() {
    return (
        <div className='orderContentSection'>
            <div className='header'>
                <Avatar url="images/product/chief.png" style={{width:"150px", height:"150px"}} alt="KFC Image" />
                <span className='headerTitle'>KFC</span>
            </div>

            <div className='content'>
                <BucketBoxCount 
                    title1="American Bucket" 
                    title2="Extra: 11 Hot Wings; 11 Crispy Strips; Small potatoes;" 
                    title3="Coca-Cola Zero glass 0.5 L;"
                    count="1"
                    price="62,00"
                    currency="RON"
                />
                <BucketBoxCount 
                    title1="American Bucket" 
                    title2="Extra: 11 Hot Wings; 11 Crispy Strips; Small potatoes;" 
                    title3="Coca-Cola Zero glass 0.5 L;"
                    count="1"
                    price="62,00"
                    currency="RON"
                />
                <BucketBoxCount 
                    title1="American Bucket" 
                    title2="Extra: 11 Hot Wings; 11 Crispy Strips; Small potatoes;" 
                    title3="Coca-Cola Zero glass 0.5 L;"
                    count="1"
                    price="62,00"
                    currency="RON"
                />
            </div>

            <div className='d-flex justify-content-center'><Button>Add more products</Button></div>
        </div>
    )
}