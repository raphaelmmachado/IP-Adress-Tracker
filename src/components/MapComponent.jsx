import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import leaflet from "leaflet";
import { useEffect } from "react";
function ResetCenterView({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position.lat && position.lng) {
      map.flyTo(leaflet.latLng(position.lat, position.lng), map.getZoom(), {
        animate: true,
      });
    }
  }, [position]);
  return null;
}
function MapComponent({ latitude, longitude }) {
  return (
    <section className="map-section">
      <MapContainer
        center={{ lat: latitude, lng: longitude }}
        zoom={8}
        scrollWheelZoom={true}
        className="map-section-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: latitude, lng: longitude }}>
          <Popup>IP is from this city!</Popup>
        </Marker>
        <ResetCenterView position={{ lat: latitude, lng: longitude }} />
      </MapContainer>
    </section>
  );
}
export { MapComponent };
