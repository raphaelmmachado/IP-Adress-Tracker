import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
} from "react-leaflet";

function MapComponent({ latitude, longitude }) {
  return (
    <section className="map-section">
      {latitude && longitude && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
          className="map-section-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
             Your city is here!
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
}
export { MapComponent };

function LocationMarker(){
  
}

// import { publicIp, publicIpv4, publicIpv6 } from "public-ip";
// const getUserIP = async () => {
//   console.log(await publicIp()); // Falls back to IPv4
//   //=> 'fe80::200:f8ff:fe21:67cf'
//   console.log(await publicIpv6());
//   //=> 'fe80::200:f8ff:fe21:67cf'
//   console.log(await publicIpv4());
// };
