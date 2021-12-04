import React from "react";
import { Link } from "react-router-dom";

function NotFoundScreen() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Return to Homepage</Link>
    </>
  );
}

export default NotFoundScreen;
