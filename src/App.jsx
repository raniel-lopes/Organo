import { useState } from "react";
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Banner />
    <CampoTexto/>
    </div>
   );
}

export default App;
