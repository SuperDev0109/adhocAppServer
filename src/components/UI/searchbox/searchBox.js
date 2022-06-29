import React, { useState } from 'react';
import './searchBox.scss';
import SearchIcon from '../icons/searchIcon';
const SearchBox = (props) => {
    const [userInfo, setUserInfo] = useState({searchres: '', searchmenu: ''});
    const onValueChanged = (e) =>{
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
            <div className='searchbox-container' >
                <SearchIcon></SearchIcon>
                <input style={{width:'100%'}} onChange={onValueChanged} {...props} maxLength={30} />
            </div>
        );
}
export default SearchBox;