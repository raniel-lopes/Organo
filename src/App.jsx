import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./componentes/Banner/Banner.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Componente de Banner */}
      <Banner />

      {/* Links para as documentações */}
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Título */}
      <h1>Vite + React</h1>

      {/* Contador */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>Bem-vindo ao React!</p>
      </div>

      {/* Texto adicional */}
      <p className="read-the-docs">
        Clique nos logos do Vite e React para saber mais.
      </p>
    </>
  );
}

export default App;
