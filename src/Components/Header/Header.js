import React, { useState } from 'react'
import "./Header.css"
import { Avatar, IconButton } from '@material-ui/core';
import { Notifications, Apps, ArrowDropDown, Search, Menu, ExitToApp } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser } from '../../features/UserSlice';
import { auth } from '../../firebase';

function Header() {
    const user = useSelector(selectUser),
    [userOptions, showUserOptions] = useState(false),
    dispatch = useDispatch();

    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logOut());
        });
    }
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
                    <Avatar src={user?.profileURL} onClick={() => showUserOptions(!userOptions)}/>
                    {userOptions &&
                    <> 
                        <div className="drop-down-options">
                            <div className="header-options">
                                <Avatar src={user?.profileURL}/>
                                <div className="user-details">
                                    <h4>{user?.displayName}</h4>
                                    <h5>{user?.email}</h5>
                                </div>
                            </div>
                            <div className="sign-out" onClick={() => signout()}>
                                <ExitToApp />
                                <h4>Sign out</h4>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Header;
