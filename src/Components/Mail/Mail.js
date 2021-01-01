import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, LabelImportantOutlined, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import React from 'react'
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./Mail.css";
import {selectOpenMail} from "../../features/MailSlice";
function Mail() {

    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="tool-left">
                    <IconButton onClick={() => history.push("./")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="tools-right">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>

            <div className="mail-body">
                    <div className="mail-body-header">
                        <h2> {selectedMail?.subject} </h2>
                        <LabelImportantOutlined className="mail-important"/>
                        <p>{selectedMail?.title}</p>
                        <p className="mail-time">{selectedMail?.time} </p> 
                    </div>
                    <div className="mail-content">
                        <p> {selectedMail?.description} </p>
                    </div>
                </div>
        </div>
    )
}

export default Mail
