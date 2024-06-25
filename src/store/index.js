const { createSlice, configureStore } = require("@reduxjs/toolkit");

const { SAMPLE_CONTEXT } = require("sample-data/sampleContext");

const appSlice = createSlice({
  name: 'app',
  initialState: SAMPLE_CONTEXT,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.card)

    },
    addTransaction(state, action) {
      state.transactions.push(action.transaction)
    }
  }
})

const store = configureStore({
  reducer: appSlice.reducer
})

export const appAction = appSlice.actions

export default store