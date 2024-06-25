
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from 'pages/Root';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import Wallet from 'pages/Wallet';
import Transaction from 'pages/Transaction';
import Analytic from 'pages/Analytic';
import Error from 'components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
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

    <RouterProvider router={router} />

  );
}

export default App;
