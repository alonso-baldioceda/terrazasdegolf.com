import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

interface IProps {
  lat: number;
  lng: number;
  zoom: number;
}

const Map: React.FC<IProps> = ({ lat, lng, zoom }) => {
  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDGDCwxLa-M6utHcr_XbA8AIh5V82i5hFc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker text="We are here!" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
