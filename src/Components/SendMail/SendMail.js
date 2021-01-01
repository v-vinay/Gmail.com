import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react'
import {useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form';
import "./SendMail.css";
import {closeSendMessage} from "../../features/MailSlice";
import { db } from '../../firebase';
import firebase from 'firebase';

function SendMail() {
    const {register, handleSubmit, errors} = useForm(),
    dispatch = useDispatch();

    const onSubmit = (data) => {
        db.collection("emails").add({
            to: data.to,
            subject: data.subject,
            message: data.content,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }
    return (
        <div className="send-mail">
            <div className="send-mail-header">
                <h3>New Message</h3>
                <Close className="close-mail" onClick={() => dispatch(closeSendMessage())}/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    type="email" 
                    placeholder="To" 
                    ref={register({required: true})}
                />
                {errors.to && <p className="input-error">To is Required</p>}
                <input 
                    name="subject" 
                    type="text" 
                    placeholder="Subject"
                    ref={register({required: true})}
                />
                {errors.subject && <p className="input-error">Subject is Required</p>}
                <input 
                    name="content" 
                    type="text" 
                    className="send-mail-content" 
                    ref={register({required: true})}
                />
                {errors.content && <p className="input-error">Message is Required</p>}
                <div className="send-mail-options">
                    <Button 
                        className="send-button"
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
