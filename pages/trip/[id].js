import React from 'react';
import { ItineraryItem } from '../../components/ItineraryItem/ItineraryItem.jsx';
// import './itinerary.css';

export default function List({ name, items }) {
  return (
    <div className="itinerary-card">
      <h2>{name}</h2>
      <ul>
        {items.map((item) => (
          <ItineraryItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `https://czechitas-itinerar.free.beeceptor.com/itinerar/${params.id}`
    );
    const res2 = await fetch(
      `https://czechitas-itinerar.free.beeceptor.com/itinerar/${params.id}/polozka`
    );
    const data = await res.json();
    const name = data.nazev;
    const items = await res2.json();

    return { props: { name, items } };
  } catch (e) {
    console.log(e);
  }
}
