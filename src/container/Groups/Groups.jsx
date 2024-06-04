import React from 'react';
import './Groups.css'
import Badge from 'components/other/Badge'
import { BADGE_DATAS } from 'sample-data/model';

function GroupContainer() {
  return (

    <div className="fast-payment-container">

      <h2>Fast Payment</h2>

      <div className="badges">

        <div className="badge">
          <span className="material-icons-sharp">add</span>
        </div>

        {BADGE_DATAS.map(badge => <Badge key={badge.title} {...badge} />)

        }



      </div>
    </div>

  );
}

export default GroupContainer;