import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const pastriesWonSlice = createSlice({
  name: 'pastriesWon',
  initialState,
  reducers: {
    setPastriesWon: (state, action) => {
      console.log('setPastriesWon:', action, action.payload);
      return action.payload
    },
  },
})

export const { setPastriesWon } = pastriesWonSlice.actions

export default pastriesWonSlice.reducer
