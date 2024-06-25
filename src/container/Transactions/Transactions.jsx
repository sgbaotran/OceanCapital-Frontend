import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/other/Transaction';
import './Transactions.css'
import { useState } from 'react';
import NewTransactionButton from 'components/button/NewTransactionButton';
import Modal from 'components/modal/Modal';
import NewTransaction from 'components/form/NewTransaction';
import ErrorMessage from 'components/form/ErrorMessage';
import { useSelector } from 'react-redux';

function TransactionContainer() {

  const [isModalOpen, setIsModalOpen] = useState(false)


  const { cards } = useSelector(state => state.cards)
  const { transactions } = useSelector(state => state.transactions)


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
      {isModalOpen ? <Modal content="Transaction" onClose={handleCloseModal} open={isModalOpen}>
        {
          cards.length !== 0 ?
            <NewTransaction onClose={handleCloseModal} /> :
            <ErrorMessage onClose={handleCloseModal} message={"There is no fund to create transaction!"} />
        }
      </Modal> : undefined
      }

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

export default TransactionContainer;