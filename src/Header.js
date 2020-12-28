import React from 'react'
import "./Header.css"
import { Avatar, IconButton } from '@material-ui/core';
import { Notifications, Apps, ArrowDropDown, Search, Menu } from '@material-ui/icons';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675" alt=""/>
                </div>
                <div className="header-mid">
                    <Search />
                    <input type="text" placeholder="Seach Mail" />
                    <ArrowDropDown className="input_caret" />
                </div>
                <div className="header-right">
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <Avatar />
                </div>
            </div>
            
        </div>
    )
}

export default Header;
