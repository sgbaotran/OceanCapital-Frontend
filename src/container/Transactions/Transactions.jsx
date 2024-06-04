import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/other/Transaction';
import './Transactions.css'
import { useState, useContext } from 'react';
import NewTransactionButton from 'components/button/NewTransactionButton';
import BankingContext from 'store/banking-context';
import Modal from 'components/modal/Modal';
import NewTransaction from 'components/form/NewTransaction';


function Transactions() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { transactions } = useContext(BankingContext)

  console.log(transactions)
  
  function handleAddTransaction() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }


  // METHOD 1
  // function openModal() {
  //   modal.current.open()
  // }
  // const modal = useRef()




  return (
    <>
      {/* METHOD ! */}
      {/* <DeprecatedModal ref={modal} content="Transaction">
        <DeprecatedNewTransaction></DeprecatedNewTransaction>
      </DeprecatedModal> */}

      {/* Modal for adding a new card */}
      <Modal content="Transaction" onClose={handleCloseModal} open={isModalOpen}>
        <NewTransaction onClose={handleCloseModal} />
      </Modal>

      <div className="recent-transactions-container">

        <div className="header">
          <h2>Recent Transaction</h2>
          <NavLink to="/transaction">more<span className="material-icons-sharp">chevron_right</span></NavLink>
        </div>
        {transactions.map(transaction => (
          <Transaction key={transaction.title}
            {...transaction} />
        ))}

        <NewTransactionButton handleOnOpen={handleAddTransaction}></NewTransactionButton>

      </div>
    </>
  );
}

export default Transactions;