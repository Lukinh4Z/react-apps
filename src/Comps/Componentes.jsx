import React from "react";
import Eventos from "./Eventos";
import LivrosApp from "./Livros";
import Return from "./Return";

const Componentes = () => {
  const livros = { a: 1996, b: 1998 };

  return (
    <section>
      <br />
      <h2>'Livros' e 'Eventos' chamados via 'Componentes':</h2>
      <LivrosApp {...livros} />
      <Eventos call="Comp" />
      <Return />
    </section>
  );
};
export default Componentes;
