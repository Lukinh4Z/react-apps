import React from "react";
import ReactDOM from "react-dom/client";
import Componente from "./Componente";

const { pathname } = window.location;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section>
      <div>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/Produtos">PRODUTOS</a>
        </li>
      </div>

      <div>
        <Componente pathname={pathname} />
      </div>
    </section>
  </React.StrictMode>
);
