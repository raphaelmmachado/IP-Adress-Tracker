import arrowImg from "../assets/images/icon-arrow.svg";
import { useRef } from "react";
import { FormatDate } from "./FormattedDate.jsx";
function HeaderComponent({ geoData, setInput, setSubmit }) {
  const inputRef = useRef("");
  return (
    <header className="header-section flex flex-col items-center justify-center border-b border-blue-700">
      <h1 className="text-white text-bold text-xl">IP Adress Tracker</h1>
      <form
        className="flex flex-row items-center justify-center max-h-[56px]"
        onSubmit={(e) => {
          e.preventDefault();
          setInput(inputRef.current.value);
          setSubmit();
          inputRef.current.value = "";
        }}
      >
        <input
          type="text"
          placeholder="Search for any ip adress"
          className="header-input focus:outline-none"
          ref={inputRef}
        />
        <button className="header-image-div bg-black flex items-center justify-center">
          <img src={arrowImg} />
        </button>
      </form>
      <div className="header-adress-section flex flex-row justify-around shadow-md">
        <div className="flex flex-col gap-2">
          <div>
            <div className="text-sm text-zinc-600 font-semibold">IP ADRESS</div>
            <div className="text-lg text-zinc-900 font-bold">{geoData.ip}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-600 font-semibold">ISP</div>
            <div className="text-lg text-zinc-900 font-bold">{geoData.isp}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="text-sm text-zinc-600 font-semibold">LOCATION</div>
            <div className="text-lg text-zinc-900 font-bold">
              {geoData.city}, {geoData.region}
            </div>
          </div>
          <div>
            <div className="text-sm text-zinc-600 font-semibold">COUNTRY</div>
            <div className="text-lg text-zinc-900 font-bold">
              <img src={geoData.flag} style={{ display: "inline-block" }} />{" "}
              {geoData.country} - {geoData.continent}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <div className="text-sm text-zinc-600 font-semibold">TIMEZONE</div>
            <div className="text-lg text-zinc-900 font-bold">
              {geoData.timezoneName}
            </div>
          </div>
          <div>
            {" "}
            <div className="text-sm text-zinc-600 font-semibold">
              CURRENT TIME
            </div>
            <div className="text-lg text-zinc-900 font-bold">
              {geoData.currentTime && geoData.timezoneName && (
                <FormatDate
                  date={geoData.currentTime}
                  timezone={geoData.timezone}
                  timezoneName={geoData.timezoneName}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { HeaderComponent };
