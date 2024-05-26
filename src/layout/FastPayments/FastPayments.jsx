import React from 'react';
import './FastPayments.css'
import Badge from 'components/ui/Badge'

function FastPayments(props) {
  return (

    <div class="fast-payment">

      <h2>Fast Payment</h2>

      <div class="badges">

        <div class="badge">
          <span class="material-icons-sharp">add</span>
        </div>


        <Badge />



      </div>
    </div>

  );
}

export default FastPayments;