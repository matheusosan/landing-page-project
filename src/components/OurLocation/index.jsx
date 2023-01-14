import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { Map } from "./styles";

export const OurLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    <Map id="OurLocation">
      <h2>Come Visit Us</h2>
      {isLoaded ? (
        <GoogleMap
          center={{ lat: -27.5969, lng: -48.5495 }}
          zoom={16}
          mapContainerStyle={{ height: "70%", width: "70%" }}
        >
          <MarkerF
            position={{ lat: -27.5969, lng: -48.5495 }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Map>
  );
};

export default OurLocation;
