import React from 'react';
import './Cards.css'
import Card from 'components/UI/Card';

function Cards() {
  const cardDatas = [
    { bankName: "TD", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
    { bankName: "CIBC", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
    { bankName: "BMO", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
  ]

  return (
    <div className='cards'>

      {cardDatas.map(card => (
        <Card bankName={card.bankName} cardNumber={card.cardNumber} balance={card.balance} cardHolder={card.cardHolder} expiryDate={card.expiryDate} cvv={card.cvv} />
      ))}

    </div>
  );


}

export default Cards;