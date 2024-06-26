import { createContext, useReducer } from "react";
import SAMPLE_CONTEXT from "sample-data/sampleContext";

export const BankingContext = createContext({
  cards: [],
  transactions: [],
  addCard: (card) => { },
  addTransaction: (transaction) => { }
})

function bankReducer(state, action) {
  const currentDatas = state

  switch (action.type) {
    case 'ADD_CARD':
      currentDatas.cards.push(action.card)
      break

    case 'ADD_TRANSACTION':
      const transaction = action.transaction
      const indexOfCard = currentDatas.cards.findIndex(
        card => transaction.fromAccount === card.number)
      currentDatas.cards[indexOfCard].balance -= transaction.amount
      currentDatas.transactions.push(transaction)
      break

    case 'UPDATE_EVERYTHING':
      return { ...action.data }

    default:
      break;
  }
  return { ...currentDatas }
}

export default function BankContextProvider({ children }) {


  const [state, dispatchBankAction] = useReducer(bankReducer, SAMPLE_CONTEXT)

  function handleAddCard(card) {
    dispatchBankAction({ type: 'ADD_CARD', card: card })
  }

  function handleAddTransaction(transaction) {
    dispatchBankAction({ type: 'ADD_TRANSACTION', transaction: transaction })
  }

  function updateContext(data) {
    dispatchBankAction({ type: 'UPDATE_CONTEXT', data: data })
  }

  const bankContext = {
    ...state,
    addCard: (card) => handleAddCard(card),
    addTransaction: (transaction) => handleAddTransaction(transaction),
    updateContext: (data) => updateContext(data)
  }

  return (<BankingContext.Provider value={bankContext}>
    {children}
  </BankingContext.Provider>)
}
