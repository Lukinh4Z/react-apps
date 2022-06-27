import React from "react";

const App = (props) => {
  // o objeto soma vai salvar o resultado
  // o método 'reduce' precisa de uma função que o 'instrui' a como reduzir
  // acc é o acumulador, uso 'Number()' para passar para número
  // 'slice(3)' vai cortar a string aprtir do 3o charactere (incluindo-o)
  // na última linha, o 'zero' é necessário para indicar o valor inicial do acumulador
  const soma = props.compras.reduce(
    (acc, atual) => acc + Number(atual.preco.slice(3)),
    0
  );

  //Origamid
  const total = props.compras
    .map((item) => Number(item.preco.replace("R$ ", " ")))
    .reduce((a, b) => a + b);

  return (
    <>
      <h3>App Carrinhos:</h3>
      <p>Nome: {props.cliente}</p>
      <p>Idade: {props.idade}</p>
      {/* <p>
        Situação:{" "}
        <span className={props.ativa ? "ativa" : "inativa"}>
          {props.ativa ? "Ativa" : "Inativa"}
        </span>
      </p> */}

      {/* Origamid: */}
      <p>
        Situação:{" "}
        <span style={{ color: props.ativa ? "green" : "red" }}>
          {props.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {/* <p hidden={!(total > 10000)}>{props.cliente} está gastando muito.</p> */}

      {/* Origamid: */}
      {total > 10000 && <p>{props.cliente} está gastando muito</p>}
      <br />
    </>
  );
};

export default App;
