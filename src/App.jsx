import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MapComponent } from "./components/MapComponent.jsx";
import { HeaderComponent } from "./components/HeaderComponent.jsx";

function App() {
  const [input, setInput] = useState("");
  const [geoData, setGeoData] = useState({});
  const [submit, setSubmit] = useState(false);

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
    try {
      const ipDataKey = import.meta.env.VITE_IPDATA_KEY;
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
      alert(`Please turn off your adblocker!
      Por favor desligue o seu adblocker!`);
    }
  };
  const getInputLocation = async () => {
    try {
      const ipDataKey = import.meta.env.VITE_IPDATA_KEY;
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
    <div id="App">
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
    </div>
  );
}

export default App;
