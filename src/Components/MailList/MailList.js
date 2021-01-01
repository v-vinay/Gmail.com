import { IconButton, Checkbox } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons';
import React, {useEffect, useState} from 'react'
import { db } from '../../firebase';
import ListView from '../ListView/ListView';
import "./MailList.css";
import Section from '../Section/Section';

function MailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection("emails")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapShot) =>
          setEmails(
            snapShot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }, []);
    return (
        <div className="mail-list">
            <div className="mail-list-settings">
                <div className="settings-left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="settings-right">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="mail-list-sections">
                <Section Icon={Inbox} title="Primary" color="red" selected={true} />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>
            <div className="list">
                {emails.map(({id, data}) => (
                    <ListView 
                        id={id}
                        key={id}
                        title={data.to}
                        subject={data.subject}
                        description={data.message}
                        time={new Date(data.timeStamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default MailList
