import React from 'react';
import './Cards.css'
import Card from 'components/ui/Card';
import NewCardModal from 'components/form/NewCardModal';
import { useEffect, useRef, useState } from 'react';
import NewCardButton from 'components/ui/NewCardButton';

function Cards() {
  const cardDatas = [
    { bankName: "TD", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
    { bankName: "CIBC", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
    // { bankName: "BMO", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: 111 },
  ]

  // ==================== ShowModal ==================== //
  const [inNewCardMode, setInNewCardMode] = useState(false)

  const newCardRef = useRef();

  useEffect(() => {
    if (newCardRef.current) {
      inNewCardMode ? openNewCardModal() : closeNewCardModal()
    }
  }, [inNewCardMode]);

  function openNewCardModal() {
    setInNewCardMode(true)
    newCardRef.current.showModal();
  }

  function closeNewCardModal() {
    setInNewCardMode(false)
    newCardRef.current.close()
  }


  return (


    <>
      {<NewCardModal handleOnClose={closeNewCardModal} ref={newCardRef} />}

      <div className='cards'>

        {cardDatas.map(card => (
          <Card bankName={card.bankName} cardNumber={card.cardNumber} balance={card.balance} cardHolder={card.cardHolder} expiryDate={card.expiryDate} cvv={card.cvv} />
        ))}

        <NewCardButton onClick={openNewCardModal} />


      </div>


    </>

  );


}

export default Cards;