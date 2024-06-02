import React, { useContext } from 'react';
import './Cards.css';
import Card from 'components/other/Card';

import { useRef } from 'react';
import NewCardButton from 'components/button/NewCardButton';
import BankingContext from 'store/banking-context';
import Modal from 'components/modal/Modal';
import NewCard from 'components/form/NewCard';



function Cards() {

  const modal = useRef()

  const { cards } = useContext(BankingContext)

  function openModal() {
    modal.current.open()
  }

  return (
    <>

      {/* Modal for adding a new card */}
      <Modal ref={modal} content="Card">
        < NewCard></ NewCard>
      </Modal>

      {/* Container that holds all card components */}
      <div className='cards-container'>
        {/* Map over card data to render individual Card components */}
        {cards.map(card => (
          <Card
            key={card.number} // Adding a key to help React identify each element
            {...card}
          />
        ))}

        {/* Button that triggers the NewCardModal to show up, styled to look like a card */}
        <NewCardButton handleOnOpen={openModal} />
      </div>
    </>
  );
}

export default Cards;
