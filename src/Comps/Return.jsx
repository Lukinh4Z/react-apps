import React from "react";

//O componente SEMPRE precisa retornar algo, mesmo que 'null'

const Return = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};

export default Return;
