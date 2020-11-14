import React from "react";
import { Container } from "@material-ui/core";
// import { GoogleMap, LoadScript } from '@react-google-maps/api'
// import GoogleMapReact from "google-map-react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const details = (props) => {
  const id = props.match.params.id;
  const biz = props.biz.find((c) => c.id == id);

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  return (
    <Container maxWidth="sm" key={biz.id}>
      <h2>{biz.name}</h2>
      <h2>{biz.description}</h2>
      <h2>{biz.hours}</h2>
      <h2>{biz.address}</h2>
      {/* <LoadScript googleMapsApiKey="AIzaSyDnqFfdnRIdEjOaRczlTzutieoGYfzcqlI">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript> */}
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    </Container>
  );
};

export default details;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDnqFfdnRIdEjOaRczlTzutieoGYfzcqlI",
// })