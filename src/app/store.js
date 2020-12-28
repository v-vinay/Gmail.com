import { configureStore } from '@reduxjs/toolkit';
import MailReducer from '../features/MailSlice';

export default configureStore({
  reducer: {
    mail: MailReducer,
  },
});
