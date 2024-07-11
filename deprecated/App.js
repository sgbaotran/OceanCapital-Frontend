
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from 'pages/Root';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import Wallet from 'pages/Wallet';
import Transaction from 'pages/Transaction';
import Analytic from 'pages/Analytic';
import BankingContext from 'store/banking-context';
import SAMPLE_CONTEXT from 'sample-data/sampleContext';
import { useState } from 'react';





const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/exchange', element: <Exchange /> },
      { path: '/wallet', element: <Wallet /> },
      { path: '/transaction', element: <Transaction /> },
      { path: '/analytic', element: <Analytic /> },
    ]
  }
])

function App() {
  const [context, setContext] = useState(SAMPLE_CONTEXT)

  function handleAddCard(card) {
    setContext(datas => {
      datas.cards.push(card)
      return { ...datas }
    })
  }
  function handleAddTransaction(transaction) {
    setContext(datas => {
      datas.transactions.push(transaction)
      for (let i = 0; i < datas.cards.length; i++) {

        if (datas.cards[i].number === transaction.fromAccount.number) {
          datas.cards[i].balance -= transaction.amount
        }

      }
      return { ...datas }
    })
  }

  const contextValue = {
    ...context,
    addCard: handleAddCard,
    addTransaction: handleAddTransaction
  }

  return (
    <BankingContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </BankingContext.Provider >
  );
}

export default App;
