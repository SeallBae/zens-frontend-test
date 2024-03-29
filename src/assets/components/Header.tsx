import '../styles/Header.css';
import logo from '../images/HLS-logo.png'
import avatar from '../images/avatar.jpg';


function Header(){

    return (
        <div className='HeaderField'>
            <img className="logo" src={logo} alt="Logo"/>
            <div className="author">
                <div className='info'>
                    <p className='handicraftedby'>Handicrafted by</p>
                    <p className='authorName'>Jim HLS</p>
                </div>
                <img className='avatar' src={avatar} alt='Avatar'/>
            </div>
        </div>
    )

}
export default Header;