import axios from "axios";
import { useEffect, useState } from "react";
import { MapComponent } from "./components/MapComponent.jsx";
import { HeaderComponent } from "./components/HeaderComponent.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";

function App() {
  const [input, setInput] = useState("");
  const [geoData, setGeoData] = useState({});
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getUserLocation(signal);
    return () => {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    if (input) {
      getInputLocation();
    }
  }, [submit]);
  const getUserLocation = async (signal) => {
    const ipDataKey = import.meta.env.VITE_IPDATA_KEY;
    try {
      const { data } = await axios(
        `https://api.ipdata.co/?api-key=${ipDataKey}`,
        {
          signal: signal,
        }
      );
      setGeoData({
        latitude: data.latitude,
        longitude: data.longitude,
        continent: data.continent_name,
        country: data.country_name,
        city: data.city,
        regionCode: data.region_code,
        region: data.region,
        ip: data.ip,
        flag: data.flag,
        isp: data.asn.name,
        timezone: data.time_zone.offset,
        timezoneName: data.time_zone.name,
        currentTime: data.time_zone.current_time,
      });
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  const getInputLocation = async () => {
    const ipDataKey = import.meta.env.VITE_IPDATA_KEY;
    try {
      const { data } = await axios(
        `https://api.ipdata.co/${input}?api-key=${ipDataKey}`
      );
      setGeoData({
        latitude: data.latitude,
        longitude: data.longitude,
        continent: data.continent_name,
        country: data.country_name,
        city: data.city,
        regionCode: data.region_code,
        region: data.region,
        ip: data.ip,
        flag: data.flag,
        isp: data.asn.name,
        timezone: data.time_zone.offset,
        timezoneName: data.time_zone.name,
        currentTime: data.time_zone.current_time,
      });
      console.log(data);
    } catch (e) {
      console.error(e);
      alert(`Error! Maybe you typed an incorrect ip adress.
      Erro! talvez você digitou um endereço de ip incorretamente.`);
    }
  };
  return (
    <main id="App" className="relative">
      {error && <ErrorMessage />}
      <HeaderComponent
        geoData={geoData}
        setInput={(text) => setInput(text)}
        setSubmit={() => setSubmit((prev) => !prev)}
      />
      {geoData.latitude && geoData.longitude && (
        <MapComponent
          latitude={geoData.latitude}
          longitude={geoData.longitude}
        />
      )}
    </main>
  );
}

export default App;
