import { useState } from "react";
import "./style.css";

export default function App() {
  const [temperature, setTemperature] = useState(10);
  const [season, setSeason] = useState("cold");

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${season}`}>{temperature}ºC</div>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            const newTemperature = temperature + 1;
            setTemperature(newTemperature);
            if (newTemperature > 15) {
              setSeason("hot");
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            const newTemperature = temperature - 1;
            setTemperature(newTemperature);
            if (newTemperature <= 15) {
              setSeason("cold");
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
