import React from "react";

const LivrosApp = (props) => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <>
      <h3>
        Livros de "As Crônicas de Gelo e Fogo", de {props.a} à {props.b}:
      </h3>
      <ul>
        {livros
          .filter(({ ano }) => ano >= props.a && ano <= props.b)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default LivrosApp;
