import React, { useState, useRef } from "react";

function RoundScreen(props) {
  //1 breath = 4 seconds
  const videoObjRef = useRef(null);


  return (
    <>
      <h1>Rounds Screen</h1>
      <h2>Breath</h2>
      <button onClick={(e) => videoObjRef.current.currentTime = 950}>Start One More Round</button>
      <video ref={videoObjRef} controls width="100%">
        <source src="./video/3-rounds-of-60-breaths.mp4" type="video/mp4"></source>
      </video>
    </>
  );
}

export default RoundScreen;
