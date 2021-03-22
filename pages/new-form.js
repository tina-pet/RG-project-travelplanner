import React, { useState, useEffect } from 'react';
import database from '../utils/db.js';

export default function NewForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    database.categoryList().then((categoryItem) => setCategories(categoryItem));
  }, []);

  return (
    <>
      <form className="form">
        <label className="nameForm">Nový itinerář:</label>
        <br />
        <div className="new-trip__form">
          <input placeholder="Kam se chystáte?" />
          <input type="date" />
        </div>

        <div className="new-item__form">
          <input type="time" />
          <div className="select">
            <select mode="multiple" placeholder="Vyberte kategorii">
              {categories.map((category) => (
                <option>{category.nazev}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="item-description"
            placeholder="Popis aktivity"
          ></input>
        </div>

        <div className="okButton">
          <button type="submit">OK</button>
        </div>
      </form>
    </>
  );
}
