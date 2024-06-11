export default class Card {

  constructor({ bank, number, balance, holder, expiryDate, cvv, color, provider }) {
    this.bank = bank
    this.number = number
    this.balance = balance
    this.holder = holder
    this.expiryDate = expiryDate
    this.cvv = cvv
    this.color = color
    this.provider = provider
  }

}