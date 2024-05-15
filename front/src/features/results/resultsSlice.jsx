import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state = action.payload
    },
    resetResults: (state) => {
      state = []
    },
  },
})

export const { setResults } = resultsSlice.actions

export default resultsSlice.reducer
