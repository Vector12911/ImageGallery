import React, { useState } from 'react'
import './header.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import 'font-awesome/css/font-awesome.min.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Header = () => {

    const [ShowMain_nav, setShowMain_nav] = useState(false);
    const [ShowLeft_nav, setShowLeft_nav] = useState(false);
    const [ShowLeft_link, setShowLeft_link] = useState(false);
    const [ShowMiddleNav, setShowMiddleNav] = useState(false);
    const [ShowRight_nav, setShowRight_nav] = useState(false);
    const [ShowRight_icon, setShowRight_icon] = useState(false);
    const [ShowleftNav_icon, setShowleftNav_icon] = useState(false);
    const [Showleft_icon, setShowleft_icon] = useState(false);


    const getMenu_icon = () => {
        setShowLeft_link(!ShowLeft_link);
        setShowMiddleNav(!ShowMiddleNav);
        setShowRight_nav(!ShowRight_nav);
    }
    const getMore_icon = () => {
        setShowMiddleNav(!ShowMiddleNav);
        setShowRight_nav(!ShowRight_nav);
        setShowRight_icon(!ShowRight_icon);
    }
    return (
        <nav className='navbar' id={ShowMain_nav ? 'main_nav_hidden' : ''}>
            <div className="leftNav" id={ShowLeft_nav ? 'left_nav_hidden' : ''}>
                <div className='logo'>MyGallery</div>

                <div className="left_link" id={ShowLeft_link ? 'left_link_hidden' : ''}>
                    <a href="" className="links">Home</a>
                    <a href="" className="links">Contact</a>
                    <a href="" className="links">Articles</a>
                    <a href="" className="links">About</a>
                </div>

                {/* <div className="leftNav_icon" id={ShowleftNav_icon ? 'leftNav_icon_hidden' : ''}>
                    <ul className="icon" id={Showleft_icon ? 'left_icon_hidden' : ''}>
                        <li className="list icon1"><a href=""><NotificationsIcon /><span className='notification' style={{ background: 'red', borderRadius: '20px', fontSize: '15px' }}></span></a></li>
                        <li className="list icon2"><a href=""><AccountCircleIcon /></a></li>
                    </ul>
                </div> */}
            </div>
            <div className="middleNav" id={ShowMiddleNav ? 'middle_nav_hidden' : ''}>
                <input type="search" className="search" placeholder="&#xF002; Search..." style={{ fontFamily: 'Roboto,sans-serif, FontAwesome' }} />
            </div>

            <div className="rightNav" id={ShowRight_nav ? 'right_nav_hidden' : ''}>
                <ul className="icon" id={ShowRight_icon ? 'right_icon_hidden' : ''}>
                    <li className="list icon1"><a href=""><NotificationsIcon /><span className='notification' style={{ background: 'red', borderRadius: '20px', fontSize: '15px' }}></span></a></li>
                    <li className="list icon2"><a href=""><AccountCircleIcon /></a></li>
                </ul>
            </div>

            <button onClick={getMenu_icon} className="menu_icon"><MenuIcon /></button>
            <span onClick={getMore_icon} className="more_icon"><MoreVertIcon /></span>
        </nav>
    )
}

export default Header



