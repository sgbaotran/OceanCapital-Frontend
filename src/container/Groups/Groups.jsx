import React from 'react';
import './Groups.css'
import Badge from 'components/dashboard/Badge'
import { BADGE_DATAS } from 'sample-data/model';

function GroupContainer() {
  return (

    <div className="fast-payment-container">

      <h3 >Fast Payment</h3>

      <div className="badges">

        <div className="badge" >
          <span className="material-icons-sharp">add</span>
        </div>

        {BADGE_DATAS.map(badge => <Badge key={badge.title} {...badge} />)}

      </div>
    </div>

  );
}

export default GroupContainer;