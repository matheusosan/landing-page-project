import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Map } from "./styles";

const containerStyle = {
  width: "70%",
  height: "70%",
};


export const OurLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
  });

  const position = { lat: 37.772, lng: -122.214 };
  
  return (
    <Map id="OurLocation">
      <h2>Come Visit Us</h2>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={13}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Map>
  );
};

export default OurLocation;
