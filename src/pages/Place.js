// PlaceList.js
import React from 'react';

function PlaceList({ places, deletePlace }) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Daftar Tempat Wisata</h2>
      {places.length === 0 ? (
        <p>Tidak ada tempat wisata yang tersedia.</p>
      ) : (
        <ul>
          {places.map((place) => (
            <li key={place.id} className="flex items-center justify-between py-2">
              <span>{place.name}</span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => deletePlace(place.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlaceList;