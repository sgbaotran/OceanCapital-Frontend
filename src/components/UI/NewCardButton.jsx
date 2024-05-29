import './NewCardButton.css';

function NewCardButton({ handleOnOpen }) {
  return (
    <div onClick={handleOnOpen} className="new-card-button">
      {/* Button icon for adding a new card */}
      <img src={require("assets/images/plus-sign.png")} alt='plus sign' />
    </div>
  );
}

export default NewCardButton;
