import './FinishDiscount.scss';

import Button from '../../UI/button/button';
export default function FinishDiscount() {
    return (
        <div className='finishDiscountSection'>
            <p className='title1'>Available Discounts</p>
            <div className='box'>
                <span className='voucherTitle'>Voucher</span>
                <Button>Add voucher </Button>
            </div>
        </div>
    )
}