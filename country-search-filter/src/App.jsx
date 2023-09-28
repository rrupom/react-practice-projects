import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.official.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, value]);

  return (
    <div className="parent">
      {loading && <h1>Loading</h1>}
      <label htmlFor="search">
        Search{" "}
        <input
          type="text"
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search ..."
        />
      </label>
      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li>{country.name.official}</li>
        ))}
      </ul>
    </div>
  );
}
