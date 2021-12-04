import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      <h1>Free Breathing App</h1>
      <ul>
        <li>
          <Link to="/round">Start</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </>
  );
}

export default HomeScreen;
