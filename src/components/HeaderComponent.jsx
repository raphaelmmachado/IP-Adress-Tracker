import arrowImg from "../assets/images/icon-arrow.svg";
import { useRef } from "react";
function HeaderComponent({
  continent,
  country,
  region,
  city,
  flag,
  ip,
  setInput,
  getInputLocation,
}) {
  const inputRef = useRef("");
  return (
    <header className="header-section flex flex-col items-center justify-center pb-10 border-b border-blue-700">
      <h1 className="text-white text-bold text-xl">IP Adress Tracker</h1>
      <form
        className="flex flex-row items-center justify-center max-h-[56px]"
        onSubmit={(e) => {
          e.preventDefault();
          setInput(inputRef.current.value);
          inputRef.current.value = "";
          getInputLocation();
        }}
      >
        <input
          type="text"
          placeholder="Search for any ip adress or domain"
          className="header-input focus:outline-none"
          ref={inputRef}
        />
        <button className="header-image-div bg-black flex items-center justify-center">
          <img src={arrowImg} />
        </button>
      </form>
      <div className="header-adress-section flex flex-row justify-around shadow-md">
        <div className="flex flex-col">
          <div className="text-sm text-zinc-600 font-semibold">IP ADRESS</div>
          <div className="text-lg text-zinc-900 font-bold">{ip}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-zinc-600 font-semibold">LOCATION</div>
          <div className="text-lg text-zinc-900 font-bold">
            {city},{region}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-zinc-600 font-semibold">COUNTRY</div>
          <div className="text-lg text-zinc-900 font-bold">
            <img src={flag} style={{ display: "inline-block" }} /> {country} -{" "}
            {continent}
          </div>
        </div>
      </div>
    </header>
  );
}
export { HeaderComponent };
