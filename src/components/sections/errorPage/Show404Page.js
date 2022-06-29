import './Show404Page.scss';

import Button from '../../UI/button/button';
import { useNavigate } from 'react-router-dom';
export default function Show404Page() {
    let navigate=useNavigate();
    return (
        <div className='show404PageSection' >
            <img src="images/error/404.png" alt="404 page" />
            <p className='title1'>Something went wrong, our team of monkeys are on it ..</p>
            <div className='d-flex justify-content-center' onClick={()=>console.log('asdf')}><Button style={{backgroundColor:'#FFC700'}}> Go back to the main page</Button></div>
        </div>
    )
}