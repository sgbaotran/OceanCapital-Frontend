import Card from 'models/CardModel';
import Transaction from 'models/TransactionModel';

const sampleCard1 = new Card('Bank of America', '1234567890123456', 5000, 'John Doe', '12/25', '123', 'warm-red', 'visa');
const sampleCard2 = new Card('Chase Bank', '9876543210987654', 3000, 'Jane Smith', '11/23', '456', 'cool-purple', 'master-card');
const SAMPLE_CARDS = [sampleCard1, sampleCard2]


const transaction1 = new Transaction(100, 'Groceries', '2024-06-01', '1234567890123456');
const transaction2 = new Transaction(50, 'Dinner', '2024-05-30', '9876543210987654');
const SAMPLE_TRANSACTIONS = [transaction1, transaction2]


const SAMPLE_CONTEXT = {
  cards: SAMPLE_CARDS,
  transactions: SAMPLE_TRANSACTIONS
}

export default SAMPLE_CONTEXT

