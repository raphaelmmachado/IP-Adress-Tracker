import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MapComponent } from "./components/MapComponent.jsx";
import { HeaderComponent } from "./components/HeaderComponent.jsx";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [ip, setIp] = useState("");
  const [flag, setFlag] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = async () => {
    try {
      const key = import.meta.env.VITE_API_KEY;
      const { data } = await axios(`https://api.ipdata.co/?api-key=${key}`);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setContinent(data.continent_name);
      setCountry(data.country_name);
      setCity(data.city);
      setRegionCode(data.region_code);
      setRegion(data.region);
      setIp(data.ip);
      setFlag(data.flag);
    } catch (e) {
      console.error(e);
      alert(`Error! Maybe typed an incorrect ip adress.
      Erro! talvez você digitou um endereço de ip incorretamente.`);
    }
  };
  const getInputLocation = async () => {
    try {
      const key = import.meta.env.VITE_API_KEY;
      const { data } = await axios(
        `https://api.ipdata.co/${input}?api-key=${key}`
      );
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setContinent(data.continent_name);
      setCountry(data.country_name);
      setCity(data.city);
      setRegionCode(data.region_code);
      setRegion(data.region);
      setIp(data.ip);
      setFlag(data.flag);
    } catch (e) {
      console.error(e);
      alert(`Error! Maybe you typed an incorrect ip adress.
      Erro! talvez você digitou um endereço de ip incorretamente.`);
    }
  };
  return (
    <div id="App">
      <HeaderComponent
        country={country}
        region={region}
        regionCode={regionCode}
        city={city}
        ip={ip}
        continent={continent}
        flag={flag}
        setInput={(text) => setInput(text)}
        getInputLocation={() => getInputLocation()}
        setSubmit={() => setSubmit((prev) => !prev)}
      />
      <MapComponent latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
