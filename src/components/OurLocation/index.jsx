import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Map } from "./styles";

const containerStyle = {
  width: "70%",
  height: "70%",
};

const location = { lat: -30.032756, lng: -51.231028 };

export const OurLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
  });

  return (
    <Map id="OurLocation">
      <h2>Come Visit Us</h2>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={14}
        >
          <Marker position={location} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Map>
  );
};

export default OurLocation;
