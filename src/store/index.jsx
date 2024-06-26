import { createSlice, configureStore } from "@reduxjs/toolkit";
import SAMPLE_CONTEXT from "sample-data/sampleContext";

const initialState = SAMPLE_CONTEXT

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload)

    },
    addTransaction(state, action) {
      state.transactions.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: { app: appSlice.reducer }
})

export const appAction = appSlice.actions

export default store