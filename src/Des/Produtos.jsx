import React from "react";

const prods = [
  { nome: "Notebook", propriedades: ["16GB RAM", "512GB"] },
  { nome: "Smartphone", propriedades: ["2GB RAM", "128GB"] },
];

const Produtos = () => {
  return (
    <>
      <h1 style={{ color: "green", fontWeight: "bold" }}>Produtos</h1>
      <div>
        {prods.map(({ nome, propriedades }) => (
          <div
            key={nome}
            style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}
          >
            <p>{nome}</p>
            <ul>
              {propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produtos;
