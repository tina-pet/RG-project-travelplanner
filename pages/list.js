import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import database from '../utils/db.js';
import NewTripForm from '../components/NewTripForm.jsx';
// import './list.css';

export default function List() {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState(false);

  useEffect(() => {
    database.itineraryList().then((json) => setTrips(json));
  }, []);

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
          <div className="trip-card">
            <Link href={`/trip/${trip.id}`}>
              <a> {trip.nazev} </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
