// App.js
import React, { useState, useEffect } from 'react';
import PlaceList from '../pages/Place';
import PlaceForm from '../components/PlaceForm';
import Navigation from '../components/Navigation';



function App() {
  const [places] = useState([]);

  useEffect(() => {
    // Fetch place data from API or database
    // and set the initial state
    // Example:
    // fetchPlaces().then((data) => {
    //   setPlaces(data);
    // });
  }, []);

  const addPlace = (setplace) => {
    // Add place to the state and update the API or database
    // Example:
    // savePlace(place).then((data) => {
    //   setPlaces([...places, data]);
    // });
  };

  const deletePlace = (placeId) => {
    // Delete place from the state and update the API or database
    // Example:
    // deletePlaceById(placeId).then(() => {
    //   setPlaces(places.filter((place) => place.id !== placeId));
    // });
  };

  return (
    <div >
      <Navigation></Navigation>
      <h1 className="text-2xl font-bold mb-4">Rekomendasi Tempat Wisata</h1>
      <PlaceList places={places} deletePlace={deletePlace} />
      <PlaceForm addPlace={addPlace} />
    </div>
  );
}

export default App;