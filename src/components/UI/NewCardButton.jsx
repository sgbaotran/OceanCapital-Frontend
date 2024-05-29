
import './NewCardButton.css'


function NewCardButton({ onClick }) {


  return (

    <div className="new-card-button">
     <img src={require("assets/images/plus-sign.png")} alt='plus sign'/>

    </div>

  );


}

export default NewCardButton;
