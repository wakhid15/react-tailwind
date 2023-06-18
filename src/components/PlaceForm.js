// PlaceForm.js
import React, { useState } from 'react';

function PlaceForm({ addPlace }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      const newPlace = {
        id: Date.now(),
        name: name.trim(),
      };
      addPlace(newPlace);
      setName('');
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Tambah Tempat Wisata</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama tempat wisata"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}

export default PlaceForm;