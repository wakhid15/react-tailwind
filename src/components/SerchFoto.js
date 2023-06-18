import React, { useState, useEffect } from 'react';

const SearchFotorch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (<>
    <SearchInput
    value={searchText}
    onChange={newText => setSearchText(newText)} />
  <VideoList
    videos={foundVideos}
    emptyHeading={`No matches for “${searchText}”`} /></>
  );
};

export default SerchFoto;
