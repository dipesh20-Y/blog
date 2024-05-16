import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = import.meta.env.GOOGLE_MAP_API_KEY

const MapContainer = ({ google }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <Map google={google} zoom={18}>
      <Marker
        onClick={handleMarkerClick}
        name="Current location"
      />
      {selectedPlace && (
        <InfoWindow onClose={handleInfoWindowClose}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
