
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from 'pages/Root';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import Wallet from 'pages/Wallet';
import Transaction from 'pages/Transaction';
import Analytic from 'pages/Analytic';
import BankContextProvider from 'store/banking-context';





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

  return (
    <BankContextProvider>
      <RouterProvider router={router} />
    </BankContextProvider>

  );
}

export default App;
