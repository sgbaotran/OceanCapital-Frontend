import Card from 'models/CardModel';
import Transaction from 'models/TransactionModel';

const sampleCard1 = new Card({ bank: 'Bank of America', number: '1234567890123456', balance: 5000, holder: 'John Doe', expiryDate: '12/25', cvv: '123', color: 'warm-red', provider: 'visa' });
const sampleCard2 = new Card({ bank: 'Chase Bank', number: '9876543210987654', balance: 3000, holder: 'Jane Smith', expiryDate: '12/23', cvv: '456', color: 'cool-purple', provider: 'master-card' });
const SAMPLE_CARDS = [sampleCard1, sampleCard2]


const transaction1 = new Transaction({ amount: 100, title: 'Groceries', date: '2024-06-01', fromAccount: '1234567890123456' });
const transaction2 = new Transaction({ amount: 50, title: 'Dinner', date: '2024-05-30', fromAccount: '9876543210987654' });

const SAMPLE_TRANSACTIONS = [transaction1, transaction2]


const SAMPLE_CONTEXT = {
  cards: SAMPLE_CARDS,
  transactions: SAMPLE_TRANSACTIONS
}

export default SAMPLE_CONTEXT

