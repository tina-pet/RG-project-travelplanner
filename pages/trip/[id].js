import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ItineraryItem } from '../../components/ItineraryItem/ItineraryItem.jsx';
import database from '../../utils/db.js';
// import './itinerary.css';

export default function List() {
  const { id } = useRouter().query;
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    database.itemList(id).then((json) => setItems(json));
    database.itineraryDetail(id).then((json) => setName(json.nazev));
  }, []);

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
