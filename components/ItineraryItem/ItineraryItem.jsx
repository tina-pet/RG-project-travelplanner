import React from 'react';

export const ItineraryItem = (props) => {
  return (
    <li>
      <div>
        {props.casOd} : {props.casDo}
      </div>
      <div>
        <p>{props.popis} </p>
        {/* <p>{props.odkaz} </p> */}
      </div>
    </li>
  );
};
