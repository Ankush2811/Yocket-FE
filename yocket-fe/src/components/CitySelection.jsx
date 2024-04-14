/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const CitySelection = ({ cities, onCitySelect, copName }) => {
  return (
    <div style={{ backgroundImage: `url("scenic.jpeg")`, backgroundSize: "cover", backgroundPosition: "center", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}>Select City for {copName}</h2>
  <select
    style={{
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      border: "2px solid white",
      borderRadius: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      color: "black",
      outline: "none",
      width: "300px", 
    }}
    onChange={(e) => onCitySelect(copName, e.target.value)}
  >
    <option value="">Select City</option>
    {cities.map((city) => (
      <option key={city.name} value={city.name}>
        {city.name}
      </option>
    ))}
  </select>
</div>

  );
};

CitySelection.propTypes = {
  cities: PropTypes.array.isRequired,
  onCitySelect: PropTypes.func.isRequired,
  copName: PropTypes.string.isRequired,
};

export default CitySelection;
