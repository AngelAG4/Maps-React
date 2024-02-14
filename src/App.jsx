import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

import "./App.css";

const markers = [
  {
    id: 1,
    name: "Qobustan",
    position: { lat: 40.0709493, lng: 49.3694411 },
  },
  {
    id: 2,
    name: "Sumqayit",
    position: { lat: 40.5788843, lng: 49.5485073 },
  },
  {
    id: 3,
    name: "Baku",
    position: { lat: 40.3947365, lng: 49.6898045 },
  }
];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Vite + React | Google Map Markers</h1>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 40.3947365, lng: 49.6898045 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url: "data:image/jpeg;base64,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",
                    scaledSize: { with: 50, height: 50}
                  }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;