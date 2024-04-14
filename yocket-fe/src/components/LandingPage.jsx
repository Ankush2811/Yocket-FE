/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const LandingPage = ({ onStart }) => {
  return (
    <div style={{ backgroundImage: `url("fug.jpeg")`, backgroundSize: "cover", backgroundPosition: "center", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>Welcome to the Fugitive Capture Game</h1>
      <button onClick={onStart} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "5px", fontSize: "1rem" }}>Start Game</button>
    </div>
  );
  
  
};
LandingPage.propTypes = {
  onStart: PropTypes.func.isRequired,
};
export default LandingPage;
