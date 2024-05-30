import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/ui/Transaction';
import './RecentTransactions.css'
import { useEffect, useRef, useState } from 'react';
import NewTransactionButton from 'components/button/NewTransactionButton';
import NewTransactionModal from 'components/form/NewTransactionModal';

function RecentTransactions() {
  // Sample data for cards
  const [transactionDatas, setTransactionDatas] = useState([]);

  // State to control whether the new Transaction modal is shown
  const [inNewTransactionMode, setInNewTransactionMode] = useState(false);

  // Reference to the modal element
  const newTransactionRef = useRef();

  // Effect to handle modal open/close based on inNewTransactionMode state
  useEffect(() => {
    // Check if modal reference is available
    if (newTransactionRef.current) {
      inNewTransactionMode ? openNewTransactionModal() : closeNewTransactionModal();
    }
  }, [inNewTransactionMode]);

  // Function to open the new Transaction modal
  function openNewTransactionModal() {
    setInNewTransactionMode(true);
    newTransactionRef.current.showModal();
  }

  // Function to close the new Transaction modal
  function closeNewTransactionModal() {
    setInNewTransactionMode(false);
    newTransactionRef.current.close();
  }


  function addNewTransaction(newTransaction) {
    setTransactionDatas(datas => {
      datas.push(newTransaction)
      return datas
    })
  }

  return (
    <>
      <NewTransactionModal ref={newTransactionRef} handleOnClose={closeNewTransactionModal} handleAddTransaction={addNewTransaction}></NewTransactionModal>
      <div className="recent-transactions">

        <div className="header">
          <h2>Recent Transaction</h2>
          <NavLink to="/transaction">more<span className="material-icons-sharp">chevron_right</span></NavLink>
        </div>
        {transactionDatas.map(transaction => (
          <Transaction key={transaction.title}
            {...transaction} />
        ))}

        <NewTransactionButton handleOnOpen={openNewTransactionModal}></NewTransactionButton>

      </div>
    </>
  );
}

export default RecentTransactions;