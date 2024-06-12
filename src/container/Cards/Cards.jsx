import React, { useContext, useState } from 'react';
import './Cards.css';
import Card from 'components/other/Card';
import NewCardButton from 'components/button/NewCardButton';
import {BankingContext} from 'store/banking-context';
import Modal from 'components/modal/Modal';
import NewCard from 'components/form/NewCard';



function CardContainer() {
  console.log()

  const [isModalOpen, setIsModalOpen] = useState(false)


  const { cards } = useContext(BankingContext)

  // METHOD 1
  // const modal = useRef()
  // function openModal() {
  //   modal.current.open()
  // }
  // function closeModal() {
  //   modal.current.close()
  // }

  function handleAddCard() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>

      {/* METHOD 1 */}
      {/* <DeprecatedModal ref={modal} content="Card">
        < DeprecatedNewCard onClose={closeModal}></ DeprecatedNewCard>
      </DeprecatedModal> */}

      {/* Modal for adding a new card */}
      <Modal content="Card" onClose={handleCloseModal} open={isModalOpen}>
        <NewCard onClose={handleCloseModal} />
      </Modal>


      <div className='cards-container'>
        {cards.map(card => (
          <Card
            key={card.number}
            {...card}
          />
        ))}

        {/* Button that triggers the NewCardModal to show up, styled to look like a card */}
        <NewCardButton handleOnOpen={handleAddCard} />
      </div>
    </>
  );
}

export default CardContainer;
