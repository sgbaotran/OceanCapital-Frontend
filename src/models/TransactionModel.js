class Transaction {
  constructor({ amount, title, date, fromAccount }) {
    this.amount = amount;
    this.title = title;
    this.date = date;
    this.fromAccount = fromAccount;
  }
}

export default Transaction;


