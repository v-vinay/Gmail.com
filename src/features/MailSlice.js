import { createSlice } from '@reduxjs/toolkit';

export const MailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false
  },
  reducers: {
    selectMailInfo: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMailInfo, openSendMessage, closeSendMessage } = MailSlice.actions;

export const selectOpenMail = state => state.mail.selectedMail;
export const selectMail = state => state.mail.sendMessageIsOpen;

export default MailSlice.reducer;
