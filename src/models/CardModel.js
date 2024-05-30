export default class Card {

  constructor(bankName, cardNumber, cardBalance, cardHolder, cardExpiryDate, cardCvv, cardColor, cardProvider) {
    this.name = bankName
    this.number = cardNumber
    this.balance = cardBalance
    this.holder = cardHolder
    this.expiryDate = cardExpiryDate
    this.cvv = cardCvv
    this.color = cardColor
    this.provider = cardProvider
  }

}