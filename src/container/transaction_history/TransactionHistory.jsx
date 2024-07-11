import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './TransactionHistory.css';
import TransactionForm from 'components/form/TransactionForm';
import ErrorMessage from 'components/form/ErrorMessage';
import Modal from 'components/modal/Modal';
import { capitalize } from 'utils/other';


function TransactionHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [mode, setMode] = useState('');

  const transactions = useSelector((state) => state.app.transactions);
  const cards = useSelector((state) => state.app.cards);


  useEffect(() => {
    setSelectedTransactions([]);
    setMode('');
  }, [transactions]);

  const toggleSelectTransaction = (transaction) => {
    setSelectedTransactions((prevSelected) =>
      prevSelected.includes(transaction)
        ? prevSelected.filter((id) => id !== transaction)
        : [...prevSelected, transaction]
    );
  };

  const toggleSelectAll = (event) => {
    setSelectedTransactions(event.target.checked ? transactions.map((t) => t.id) : []);
  };

  const isSelected = (transaction) => selectedTransactions.includes(transaction);

  const handleAddTransaction = () => {
    setIsModalOpen(true);
    setMode('add');
  };

  const handleEditTransaction = () => {
    setIsModalOpen(true);
    setMode('edit');
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitTransaction = () => setSelectedTransactions([]);

  const renderErrorMessage = () => {
    if (mode === 'add' && cards.length === 0) {
      return 'There is no fund to create transaction!';
    } else if (mode === 'edit' && selectedTransactions.length === 0) {
      return 'There is no transaction(s) to edit!';
    }
    return null;
  };

  return (
    <>
      {isModalOpen && (
        <Modal content={`${capitalize(mode)} Transaction`} onClose={handleCloseModal} open={isModalOpen}>
          {renderErrorMessage() ? (
            <ErrorMessage onClose={handleCloseModal} message={renderErrorMessage()} />
          ) : (
            <TransactionForm
              mode={mode}
              onSubmit={handleSubmitTransaction}
              selectedTransactions={selectedTransactions}
              onClose={handleCloseModal}
            />
          )}
        </Modal>
      )}

      <div className="transaction-history">
        <div className="transaction-history-header">
          <h2>Transaction History</h2>
          <div className="transaction-history-buttons">
            <button onClick={handleAddTransaction}>New Transaction</button>
            <button onClick={handleEditTransaction} disabled={selectedTransactions.length === 0}>
              Edit
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>
                <div className="header-content">
                  <input
                    type="checkbox"
                    className="select-all-checkbox"
                    onChange={toggleSelectAll}
                    checked={selectedTransactions.length === transactions.length && transactions.length > 0}
                  />
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Title</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Payee</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Category</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Date</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Card</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <span>Amount</span>
                  <span className="material-icons-sharp">swap_vert</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className={isSelected(transaction) ? 'active' : ''}>
                <td>
                  <input
                    type="checkbox"
                    className="select-checkbox"
                    checked={isSelected(transaction)}
                    onChange={() => toggleSelectTransaction(transaction)}
                  />
                </td>
                <td>{transaction.title}</td>
                <td>{transaction.payee}</td>
                <td>{transaction.category.title}</td>
                <td>{transaction.date}</td>
                <td>*{transaction.account.number.slice(-4)}</td>
                <td>-${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionHistory;
