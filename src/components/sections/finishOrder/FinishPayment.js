import './FinishPayment.scss';

export default function FinishPayment() {
    return (
        <div className='finishPaymentSection'>
            <span className='title1'>Payment</span>
            <div className='box'>
                <span className='title2'>How do you want to pay?</span>
                <div className='boxPanel'>
                    <div className='boxOption'>
                        <input type="radio" id="boxOptionRadio1" name='boxOption' value="saved credit card" />
                        <label htmlFor="boxOptionRadio1">Saved credit card</label>
                    </div>
                    <div className='boxOption'>
                        <input type="radio" id="boxOptionRadio2" name='boxOption' value="online with credit card" />
                        <label htmlFor="boxOptionRadio2">Online with credit card</label>
                    </div>
                    <div className='boxOption'>
                        <input type="radio" id="boxOptionRadio3" name='boxOption' value="cash" />
                        <label htmlFor="boxOptionRadio3">Cash</label>
                    </div>
                </div>
            </div>
        </div>
    )
}