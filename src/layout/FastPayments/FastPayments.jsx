import React from 'react';
import './FastPayments.css'
import Badge from 'components/ui/Badge'

function FastPayments(props) {
  return (

    <div className="fast-payment">

      <h2>Fast Payment</h2>

      <div className="badges">

        <div className="badge">
          <span className="material-icons-sharp">add</span>
        </div>


        <Badge />



      </div>
    </div>

  );
}

export default FastPayments;