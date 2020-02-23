import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

export default function GoogleMap() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const [Center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const [Zoom, setZoom] = useState(11);

  return (
    <div className="googleMap my-3 w-100 h-100 ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "GoogleApiKey" }}
        defaultCenter={Center}
        defaultZoom={Zoom}
      >
        <AnyReactComponent class="w-100" lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
}
