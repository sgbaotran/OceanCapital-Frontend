import { createSlice, configureStore } from "@reduxjs/toolkit";

import SAMPLE_CONTEXT from "sample-data/datas";

const initialState = SAMPLE_CONTEXT

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.unshift({ id: state.cards.length + 1, ...action.payload })

    },
    addTransaction(state, action) {
      console.log(state.transactions)
      
      state.transactions.unshift({ id: state.transactions.length + 1, ...action.payload })
      
      console.log(state.transactions)
    },
    editTransactions(state, action) {
      const { selectedTransactions, transaction } = action.payload;


      state.transactions = state.transactions.map(trans =>
        selectedTransactions.includes(trans.id)
          ? { ...trans, ...transaction }
          : trans
      );
    }

  }
})

const store = configureStore({
  reducer: { app: appSlice.reducer }
})

export const appAction = appSlice.actions

export default store