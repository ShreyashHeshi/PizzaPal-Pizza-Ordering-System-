import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 18.5204, // Default latitude (Pune, India)
  lng: 73.8567, // Default longitude
};

function ThankYou() {
  const [orderLocation, setOrderLocation] = useState(center);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFW-kGs7FUUmrnE8eQk6xdogjNYi0GRW4", // Replace with your API Key
  });

  return (
    <div className="container">
      <h5>Thank you for ordering!</h5>
      <a href="/pizza" className="fw-bold text-body">
        <u>Continue shopping</u>
      </a>

      <h6 className="mt-4">Track your order:</h6>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={orderLocation} zoom={14}>
          <Marker position={orderLocation} />
        </GoogleMap>
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
}

export default ThankYou;
