/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const VehicleSelection = ({ vehicles, onVehicleSelect, copName }) => {
  return (
    <div
      style={{
        backgroundImage: `url("scenic.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}>
        Select Vehicle for {copName}
      </h2>
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
        onChange={(e) => onVehicleSelect(copName, e.target.value)}
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle.kind} value={vehicle.kind}>
            {vehicle.kind} (Range: {vehicle.range} km)
          </option>
        ))}
      </select>
    </div>
  );
};

VehicleSelection.propTypes = {
  vehicles: PropTypes.array.isRequired,
  onVehicleSelect: PropTypes.func.isRequired,
  copName: PropTypes.string.isRequired,
};

export default VehicleSelection;
