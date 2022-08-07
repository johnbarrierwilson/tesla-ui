import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoiamhud2xzbiIsImEiOiJ1U0QxSXI4In0.DnOoNs6mWgeQ-SZKC9tXOg";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-87.91008824106005);
  const [lat, setLat] = useState(30.523026792244025);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/jhnwlsn/cikh67n3p004m9vkogq6uyfsc",
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
          <div className="absolute flex h-12 items-center justify-between left-4 right-4 top-0 z-20">
            <div className="flex font-semibold justify-between text-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-zinc-700 h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              <p className="ml-4">7:34 PM</p>
            </div>
            <div className="flex items-center">
              <p>AIRBAG</p>
            </div>
          </div>

          <div className="absolute bg-white h-56 left-4 p-4 rounded-lg shadow-xl top-12 w-1/3 z-20">
            <p>Next turn</p>
          </div>

          <div className="absolute bg-white bottom-9 h-96 left-4 p-4 rounded-lg shadow-xl w-1/3 z-20">
            <p>Media</p>
          </div>

          {/* <div className="absolute bg-gradient-to-b from-white h-14 left-0 opacity-85 pointer-events-none right-0 to-transparent top-0 z-10" /> */}
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
