// import "mapbox-gl/dist/mapbox-gl.css";
// import ReactMapGl from 'react-map-gl'
// import {Marker, GeolocateControl, FullscreenControl, Source, Layer, NavigationControl} from 'react-map-gl' 
// import { useRef, useEffect, useState } from "react";

// const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

// function App() {
//   const [newPlace, setNewPlace] = useState(null);
//   const [start, setStart] = useState([-114.056648,51.048041]);
//   const [end, setEnd] = useState([-114.057117,51.044889]);
//   const [coords, setCoords] = useState([]);
  
//   const [viewPort, setViewPort] = useState({
//     latitude:  51.0464337040184,
//     longitude: -114.05699301202013,
//     zoom: 16,
//   });
//   const geoControlRef = useRef();


//   const handleClick = (e) => {
//     const newEnd = e.lngLat
    
//     const endPoint = Object.keys(newEnd).map((item, i) => newEnd[item]);
//     console.log('This is the endpoint ', endPoint);
//     setEnd(endPoint);
//   }

//   const fetchRouteData = async () => {
//     try {
//       const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=pk.eyJ1IjoiaGFycmlwdXR0ZXJyIiwiYSI6ImNscmw4ZXRvNzBqdzYya3BrcTdhaDlkZGUifQ.croMPXknb0ZuTliWP9BGyw`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data.routes[0].geometry.coordinates);
//       setCoords(data.routes[0].geometry.coordinates)
//     } catch (error) {
//       console.error("Error fetching route data: ", error);
//     }
//   }

//   useEffect(() => {
//     fetchRouteData();
//     console.log(GeolocateControl)
//     geoControlRef.current?.trigger();
//   }, [end , start, geoControlRef.current]);

//   const geoJson = {
//     "type": "FeatureCollection",
//     "features": [{
//       "type": "feature",
//       "geometry": {
//         "type": "LineString",
//         "coordinates": [...coords ]
//       }
//     }]
//   }

//   const endPoint = {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [...end],
//         "type": "Point"
//       }
//   }

//   // Route Styles
//   const lineStyle = {

//     id: 'roadLayer',
//     type: 'line',
//     layout: {
//       "line-join": "round",
//       "line-cap": "round"
//     },
//     paint: {
//       "line-color": "blue",
//       "line-width": 4,
//       "line-opacity": 0.75
//     }

//   }

//   const layerEndpoint = {
//     id: 'end',
//     type: 'circle',
//     source: {
//       type: 'geojson',
//       data: end
//     },
//     paint: {
//       'circle-radius': 4,
//       'circle-color': '#de1663'
//     }
//   }


//   return (
//     <> 
//        <div className="w-screen h-screen">
//         <ReactMapGl
//         onClick={handleClick}
//         {...viewPort}
//         mapboxAccessToken={TOKEN}
//         width="100%"
//         height="100%"
//         transitionDuration='200'
//         mapStyle={"mapbox://styles/harriputterr/cls3iz7v800dc01pu1tpqcvdu"}
//         onMove={(event) => {
//           const {longitude, latitude, zoom} = event.viewState;
//           setViewPort({longitude, latitude, zoom})
//         }}
//         // onDblClick={handleClick}
//         >

//           <Source id="routerSource" type="geojson" data={geoJson}>
//             <Layer {...lineStyle} />
//           </Source>

//           <Source id="endSource" type="geojson" data={endPoint}>
//             <Layer {...layerEndpoint}/>
//           </Source>

//           {/* <GeolocateControl /> */}
//           <GeolocateControl ref={geoControlRef}/>
//           <FullscreenControl/>
//           <NavigationControl/>

//           <Marker longitude={start[0]} latitude={start[1]}/>

//         {newPlace ? (
//           <>
//             <Marker
//             latitude={newPlace?.lat}
//             longitude={newPlace?.long}
//             offsetLeft={-1 * viewPort.zoom}
//             offsetTop={-1 * viewPort.zoom}
//             >
//             </Marker>
//           </> 
//         ): null}

//         </ReactMapGl>
//        </div>
//     </>
//   );
// }

// export default App;
