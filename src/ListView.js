import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./ListView.css";
import { selectMailInfo } from "./features/MailSlice";

function ListView({id, title, subject, time, description}) {
    const history = useHistory(),
    dispatch = useDispatch();

    const showMailInfo = () => {
        dispatch(selectMailInfo({
            id, title, subject, time, description
        }));

        history.push("./mail")
    }
    return (
        <div onClick={showMailInfo} className="list-view">
            <div className="mail-options">
                <Checkbox />
                <IconButton> 
                    <StarBorderOutlined />
                </IconButton>
                <IconButton> 
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className="mail-title">
                {title}
            </h3>
            <div className="mail-subject">
                <h4>
                    {subject}
                    <span className="mail-description">
                        {" - " + description}
                    </span>
                </h4>
            </div>
            <p className="mail-timeStamp">
                {time}
            </p>
            
        </div>
    )
}

export default ListView
