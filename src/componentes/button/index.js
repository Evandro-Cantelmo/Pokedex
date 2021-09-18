import React from "react";

// import { Container } from './styles';

function button() {
  function clickHandle() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandle()}>Click</button>
    </div>
  );
}

export default button;
