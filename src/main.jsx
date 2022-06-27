import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Comps/App";
import Componentes from "./Comps/Componentes";
import Eventos from "./Comps/Eventos";
import LivrosApp from "./Comps/Livros";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const livros = { a: 1998, b: 2000 };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App {...luana} />
    <App {...mario} />
    <LivrosApp {...livros} />
    <Eventos call="Main" />
    <Componentes />
  </React.StrictMode>
);
