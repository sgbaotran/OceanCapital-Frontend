
// Function to format the card number by grouping digits in sets of 4
export function formatCardNumber(str) {
  return str.match(/.{1,4}/g).join(' ');
}

// Function to mask the card number, showing only the last 4 digits
export function hideCardNumber(str) {
  return "**** **** **** " + str.slice(-4);
}

export function calculateBalance(card, transactions) {
  let expense = 0
  for (const transaction of transactions) {
    if (transaction.fromAccount === card.number)
      expense += transaction.amount
  }
  return (card.balance - expense).toLocaleString()

}
export function formatCardBalance(balance) {
  return balance.toLocaleString()
}