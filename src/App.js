import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Mail from "./Components/Mail/Mail";
import MailList from "./Components/MailList/MailList";
import Login from "./Components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SendMail from './Components/SendMail/SendMail';
import {selectMail} from "./features/MailSlice";
import { logIn, selectUser } from './features/UserSlice';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectMail),
  user = useSelector(selectUser),
  dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(logIn({
        displayName: user.displayName,
        email: user.email,
        profileURL: user.photoURL
      }));
    })
  }, [])
  return (
    <Router>
      {!user ?
        <Login /> 
      : 
        <div className="App">
          <Header />
          <div className="app-body">
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <MailList />
                </Route>
              </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      }
    </Router>
  );
}

export default App;
