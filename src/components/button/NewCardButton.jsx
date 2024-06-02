import './NewCardButton.css';

function NewCardButton({ handleOnOpen }) {
  return (
    <button onClick={handleOnOpen} className="new-card-button">
      {/* Button icon for adding a new card */}
      <img src={require("assets/images/plus-sign.png")} alt='plus sign' />
    </button>
  );
}

export default NewCardButton;
