import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/other/Transaction';
import './Transactions.css'
import { useEffect, useRef, useState, useContext } from 'react';
import NewTransactionButton from 'components/button/NewTransactionButton';
// import NewTransactionModal from 'components/form/NewTransactionModal';
import BankingContext from 'store/banking-context';
import Modal from 'components/modal/Modal';
import NewTransaction from 'components/form/NewTransaction';


function Transactions() {
  const modal = useRef()


  const { transactions } = useContext(BankingContext)

  // Sample data for cards
  const [transactionDatas, setTransactionDatas] = useState(transactions);

  // State to control whether the new Transaction modal is shown
  // const [inNewTransactionMode, setInNewTransactionMode] = useState(false);


  // // Effect to handle modal open/close based on inNewTransactionMode state
  // useEffect(() => {
  //   // Check if modal reference is available
  //   if (newTransactionRef.current) {
  //     inNewTransactionMode ? openNewTransactionModal() : closeNewTransactionModal();
  //   }
  // }, [inNewTransactionMode]);

  // // Function to open the new Transaction modal
  // function openNewTransactionModal() {
  //   setInNewTransactionMode(true);
  //   newTransactionRef.current.showModal();
  // }

  // // Function to close the new Transaction modal
  // function closeNewTransactionModal() {
  //   setInNewTransactionMode(false);
  //   newTransactionRef.current.close();
  // }


  // function addNewTransaction(newTransaction) {
  //   setTransactionDatas(datas => {
  //     datas.push(newTransaction)
  //     return datas
  //   })
  // }

  function openModal() {
    modal.current.open()
  }




  return (
    <>

      <Modal ref={modal} content="Transaction">
        {/* <NewCard></NewCard> */}
        <NewTransaction></NewTransaction>
      </Modal>

      {/* <NewTransactionModal ref={newTransactionRef} handleOnClose={closeNewTransactionModal} handleAddTransaction={addNewTransaction}></NewTransactionModal> */}
      <div className="recent-transactions-container">

        <div className="header">
          <h2>Recent Transaction</h2>
          <NavLink to="/transaction">more<span className="material-icons-sharp">chevron_right</span></NavLink>
        </div>
        {transactionDatas.map(transaction => (
          <Transaction key={transaction.title}
            {...transaction} />
        ))}

        <NewTransactionButton handleOnOpen={openModal}></NewTransactionButton>

      </div>
    </>
  );
}

export default Transactions;