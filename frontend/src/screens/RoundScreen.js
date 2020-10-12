import React, { useState, useEffect } from "react";

function RoundScreen(props) {
  //1 breath = 4 seconds

  const [seconds, setSeconds] = useState(4);
  const [breaths, setBreaths] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setBreaths((breaths) => ++breaths),
      4000
    );
  });

  return (
    <>
      <h1>Rounds Screen</h1>
      <h2>Breath</h2>
      <div>{breaths}</div>
    </>
  );
}

export default RoundScreen;
