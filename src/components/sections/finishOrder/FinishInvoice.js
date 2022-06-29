import './FinishInvoice.scss';

import Button from '../../UI/button/button';
export default function FinishInvoice() {
    return (
        <div className='finishInvoiceSection'>
            <p className='title1'>Invoice</p>
            <p className='title2'>If you need an invoice, please add your company details</p>
            <div className='d-flex justify-content-center'><Button> Add invoice details </Button></div>
        </div>
    )
}