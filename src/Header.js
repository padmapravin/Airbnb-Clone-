import React from 'react'
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
           
        < div className='header__right'>
            <cart />
        </div>
            <div className='header__right'>
                <p>Airbnb your home</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
