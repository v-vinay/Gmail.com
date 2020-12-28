import { Button, IconButton } from '@material-ui/core';
import { AccessTime, Add, Duo, ExpandMore, LabelImportant, Note, Person, Phone, Send, Star } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react'
import {useDispatch} from 'react-redux'
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions';
import {openSendMessage} from "./features/MailSlice"
function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button 
                startIcon={<Add fontSize="large"/>} 
                className="compose-button"
                onClick={() => dispatch(openSendMessage())}> 
                COMPOSE 
            </Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" count={10} selected={true}/>
            <SidebarOptions Icon={Star} title="Starred" count={10}/>
            <SidebarOptions Icon={AccessTime} title="Snoozed" count={10}/>
            <SidebarOptions Icon={Send} title="Send" count={10}/>
            <SidebarOptions Icon={Note} title="Drafts" count={10}/>
            <SidebarOptions Icon={LabelImportant} title="Important" count={10}/>
            <SidebarOptions Icon={ExpandMore} title="More" count={10}/>

            <div className="sidebar-footer">
                <div className="sidebar-footer-icons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
