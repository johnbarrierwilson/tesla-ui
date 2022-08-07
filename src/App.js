import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoiamhud2xzbiIsImEiOiJ1U0QxSXI4In0.DnOoNs6mWgeQ-SZKC9tXOg";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-87.90408824106005);
  const [lat, setLat] = useState(30.523026792244025);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/jhnwlsn/cl6ignsq6000x17ldlwf6cc7x",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-full">
        <div className="w-1/3">
          <div className="border-b-2 border-b-zinc-100 flex h-12 items-center justify-between mx-4">
            <div className="flex font-semibold justify-between text-zinc-300 w-16">
              <span className="text-zinc-900 font-bold">P</span>
              <span>R</span>
              <span>N</span>
              <span>D</span>
            </div>
            <div className="flex items-center">
              <p className="font-semibold mr-2 text-sm text-zinc-700">180 mi</p>
              <div className="bg-zinc-200 flex h-4 overflow-hidden rounded-sm w-12">
                <div className="bg-zinc-700 h-full w-2/3" />
              </div>
              <div className="bg-zinc-200 h-2 rounded-r-sm w-0.5"></div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 relative w-2/3">
          {/* <div className="absolute bg-gradient-to-r bottom-0 from-white left-0 pointer-events-none to-transparent top-0 w-80 z-10" /> */}
          <div ref={mapContainer} className="h-full w-full" />
        </div>
      </div>
      <div className="bg-zinc-900 flex h-24 text-white">
        <p>Dock</p>
      </div>
    </div>
  );
}

export default App;
