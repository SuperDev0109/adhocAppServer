import './avatar.scss';
const Avatar = (props) => {
    return (
    
        <div className='chief' style={props.style}>
            <img src={props.url} />
        </div>
        );
}
export default Avatar;