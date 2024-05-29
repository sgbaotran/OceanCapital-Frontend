import React from 'react';
import './Cards.css';
import Card from 'components/ui/Card';
import NewCardModal from 'components/form/NewCardModal';
import { useEffect, useRef, useState } from 'react';
import NewCardButton from 'components/ui/NewCardButton';
import { CARD_TEST_DATAS } from 'test/model';

function Cards() {
  // Sample data for cards
  const [cardDatas, setCardDatas] = useState(CARD_TEST_DATAS);

  // State to control whether the new card modal is shown
  const [inNewCardMode, setInNewCardMode] = useState(false);

  // Reference to the modal element
  const newCardRef = useRef();

  // Effect to handle modal open/close based on inNewCardMode state
  useEffect(() => {
    // Check if modal reference is available
    if (newCardRef.current) {
      inNewCardMode ? openNewCardModal() : closeNewCardModal();
    }
  }, [inNewCardMode]);

  // Function to open the new card modal
  function openNewCardModal() {
    setInNewCardMode(true);
    newCardRef.current.showModal();
  }

  // Function to close the new card modal
  function closeNewCardModal() {
    setInNewCardMode(false);
    newCardRef.current.close();
  }


  function addNewCard({ cardNumber, cardHolder, expiryDate, cvv }) {
    setCardDatas(datas => {
      datas.push({ cardNumber, cardHolder, expiryDate, cvv, balance: 9999, bankName: "TD" })
      console.log(datas)
      return datas
    })
  }


  return (
    <>
      {/* Modal for adding a new card */}
      <NewCardModal handleAddCard={addNewCard} handleOnClose={closeNewCardModal} ref={newCardRef} />

      {/* Container that holds all card components */}
      <div className='cards'>
        {/* Map over card data to render individual Card components */}
        {cardDatas.map(card => (
          <Card
            key={card.cardNumber} // Adding a key to help React identify each element
            {...card}
          />
        ))}

        {/* Button that triggers the NewCardModal to show up, styled to look like a card */}
        <NewCardButton handleOnOpen={openNewCardModal} />
      </div>
    </>
  );
}

export default Cards;
