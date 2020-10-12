import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      <h1>Free Breathing App</h1>
      <Link to="/round">Start</Link>
      <Link to="/settings">Settings</Link>
    </>
  );
}

export default HomeScreen;
