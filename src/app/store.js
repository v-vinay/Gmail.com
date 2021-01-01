import { configureStore } from '@reduxjs/toolkit';
import MailReducer from '../features/MailSlice';
import UserReducer from "../features/UserSlice";

export default configureStore({
  reducer: {
    mail: MailReducer,
    user: UserReducer,
  },
});
