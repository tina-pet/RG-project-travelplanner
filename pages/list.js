import React, { useState } from 'react';
import Link from 'next/link';

import NewTripForm from '../components/NewTripForm.jsx';
// import './list.css';

export default function List({ trips }) {
  const [newTrip, setNewTrip] = useState(false);

  return (
    <main className="list">
      <h1 className="trips-heading">Moje výlety</h1>
      <button className="create-trip" onClick={() => setNewTrip(true)}>
        Naplánovat výlet
        {/* <Link href="/new-form">
          <a>Naplánovat výlet</a>
        </Link> */}
      </button>
      {newTrip ? <NewTripForm /> : null}
      <div className="trips-container">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <Link href={`/trip/${trip.id}`}>
              <a> {trip.nazev} </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://czechitas-itinerar.free.beeceptor.com/itinerar'
  );
  const trips = await res.json();
  return { props: { trips } };
}
