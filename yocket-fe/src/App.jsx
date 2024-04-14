/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import CitySelection from "./components/CitySelection";
import VehicleSelection from "./components/VehicleSelection";
import ResultPage from "./components/ResultPage";

function App() {
  const [step, setStep] = useState(1);
  const [copChoices, setCopChoices] = useState([]);
  const [captureStatus, setCaptureStatus] = useState("");
  const [cities, setCities] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cities");
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchCities();
    fetchVehicles();
  }, []);

  const handleCitySelection = async (copName, city) => {
    setCopChoices([...copChoices, { copName, city }]);
    if (copChoices.length < 3) {
      setStep(step + 1);
    }
  };

  const handleVehicleSelection = async (copName, vehicle) => {
    const updatedChoices = copChoices.map((choice) =>
      choice.copName === copName ? { ...choice, vehicle } : choice
    );
    setCopChoices(updatedChoices);
    if (updatedChoices.length === 3) {
      try {
        const response = await axios.post("http://localhost:5000/capture", {
          copChoices: updatedChoices,
        });
        console.log("repsonse", response);
        setCaptureStatus(response.data.captureStatus);
        setStep(step + 1);
      } catch (error) {
        console.error("Error simulating capture status:", error);
      }
    }
  };

  const resetGame = () => {
    setStep(1);
    setCopChoices([]);
    setCaptureStatus("");
  };

  return (
    <div className="App">
      {step === 1 && <LandingPage onStart={() => setStep(2)} />}
      {step >= 2 && step <= 4 && (
        <CitySelection
          cities={cities}
          onCitySelect={handleCitySelection}
          copName={`Cop${step - 1}`}
        />
      )}
      {step >= 5 && step <= 7 && (
        <VehicleSelection
          vehicles={vehicles}
          onVehicleSelect={handleVehicleSelection}
          copName={`Cop${step - 4}`}
        />
      )}
      {step === 8 && (
        <ResultPage captureStatus={captureStatus} onRestart={resetGame} />
      )}
    </div>
  );
}

export default App;
