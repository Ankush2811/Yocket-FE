/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const ResultPage = ({ captureStatus, onRestart }) => {
  return (
    <div
      style={{
        backgroundImage: `url("fuganimated.jpeg")`,
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
      <h2 style={{ fontSize: "2em", marginBottom: "20px" }}>Game Result</h2>
      {captureStatus ? (
        <p style={{ fontSize: "1.5em", marginBottom: "20px" }}>
          {captureStatus}
        </p>
      ) : (
        <p style={{ fontSize: "1.5em", marginBottom: "20px" }}>
          Fugitive was not captured
        </p>
      )}
      <button
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          border: "none",
          padding: "10px 20px",
          fontSize: "1em",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onClick={onRestart}
      >
        Restart Game
      </button>
    </div>
  );
};

ResultPage.propTypes = {
  captureStatus: PropTypes.string,
  onRestart: PropTypes.func.isRequired,
};
export default ResultPage;
