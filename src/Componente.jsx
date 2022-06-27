import React from "react";
import Home from "./Des/Home";
import Produtos from "./Des/Produtos";

const Componente = ({ pathname }) => {
  if (pathname == "/") {
    return <Home />;
  } else if (pathname == "/Produtos") {
    return <Produtos />;
  } else {
    alert("Erro");
    return <div>Erro!</div>;
  }
};

export default Componente;
