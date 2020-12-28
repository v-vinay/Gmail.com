import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from "./Mail";
import MailList from "./MailList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import SendMail from './SendMail';
import {selectMail} from "./features/MailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectMail);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
