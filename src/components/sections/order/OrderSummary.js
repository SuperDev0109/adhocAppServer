import './OrderSummary.scss';
import SummaryCost from '../../UI/order/SummaryCost';
import Button from '../../UI/button/button';
import { useNavigate } from 'react-router-dom';
export default function OrderSummary() {
    let navigate = useNavigate();
    return (
        <div className='orderSummarySection'>
            <span className='title1'>Order Summary</span>
            <div className='panel'>
                <SummaryCost title="Total cost" price="62,00" currency="RON" />
                <SummaryCost title="Total delivery cost" price="62,00" currency="RON" />
                <SummaryCost title="Total" price="62,00" currency="RON" total1BigSize="total1BigSize" total2BigSize="total2BigSize" />
            </div>
            <div className='d-flex justify-content-center' onClick={()=>navigate('/finish-ordering')} ><Button style={{backgroundColor:'#FFC700',minWidth:'250px'}}>NEXT STEP</Button></div>
        </div>
    )
}