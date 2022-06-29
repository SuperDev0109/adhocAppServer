import './FinishTips.scss';
import TipBtn from '../../UI/order/TipBtn';

export default function FinishTips() {
    return (
        <div className='finishTipsSection'>
            <p className='title1'>Tips</p>
            <p className='title2'>This is not mandatory but it will help us grow and contribute more to the community</p>
            <div className='box'>
                <TipBtn price="1,00" currency="RON" />
                <TipBtn price="2,00" currency="RON" className="btnBackground" />
                <TipBtn price="3,00" currency="RON" />
                <TipBtn price="4,00" currency="RON" />
            </div>
        </div>
    )
}