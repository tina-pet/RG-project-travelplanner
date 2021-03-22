import React, { useState } from 'react';

export default function NewTripForm() {
  const [tripName, setTripName] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');

  const data = {
    nazev: tripName,
    datumOd: dateFrom,
    datumDo: dateUntil,
  };
  const handleSubmit = (event) => {
    event.preventDefault;
    itineraryAppend(data);
  };
  return (
    <div className="new-trip__form">
      <form type="submit">
        <input
          type="text"
          placeholder="Kam se chystáte?"
          className="new-trip__name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        ></input>
        <label>Od: </label>
        <input
          type="date"
          className="new-trip__date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        ></input>
        <label>Do: </label>
        <input
          type="date"
          className="new-trip__date"
          value={dateUntil}
          onChange={(e) => setDateUntil(e.target.value)}
        ></input>
        <button onSubmit={handleSubmit}>Vytvořit</button>
      </form>
    </div>
  );
}
