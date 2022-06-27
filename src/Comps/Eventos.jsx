import React from "react";

const Eventos = (props) => {
  const handleClick = (event) => {
    alert("Clicou em: " + event.target.innerText);
  };
  return (
    <>
      <br />
      <h3>Eventos: </h3>
      <button onClick={handleClick}>Teste {props.call}</button>
    </>
  );
};

export default Eventos;
