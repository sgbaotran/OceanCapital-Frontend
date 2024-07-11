import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/common/Transaction';
import './RecentTransactions.css'
import { useSelector } from 'react-redux';


function RecentTransactions({ showLink = false }) {

  // const [isModalOpen, setIsModalOpen] = useState(false)

  const transactions = useSelector((state) => (state.app.transactions))

  // function handleAddTransaction() {
  //   setIsModalOpen(true)
  // }

  // function handleCloseModal() {
  //   setIsModalOpen(false)
  // }

  return (
    <>

      <div className="transaction-container">
        <div className="header">
          <h3>Recent Payments</h3>
          {showLink ? <NavLink to="/transaction"> See all</NavLink> : undefined}
        </div>


        <div className='content'>
          
          {transactions.map(transaction => (
            <Transaction key={transaction.title}
              transaction={transaction} showDetails={true} />
          ))}

          {transactions.map(transaction => (
            <Transaction key={transaction.title}
              transaction={transaction} showDetails={true} />
          ))}
   


          {/* <NewTransactionButton handleOnOpen={handleAddTransaction}></NewTransactionButton> */}
        </div>
      </div>

    </>
  );
}

export default RecentTransactions;