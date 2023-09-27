import { MdOutlineLuggage } from "react-icons/md";
import './style.css';

function App() {
  return (
    <div className="container">
      
      <h1 className="titulo">Recepção Virtual by SALT<MdOutlineLuggage size={55} color="#FFF"/></h1>

      <main className="main">
        <h2><a href="http://salt.com.br">Opção A</a></h2>
        <h2><a href="http://salt.com.br">Opção B</a></h2>
        <h2><a href="http://salt.com.br">Opção C</a></h2>
        <h2><a href="http://salt.com.br">Opção D</a></h2>
        <h2><a href="http://salt.com.br">Opção E</a></h2>
      </main>

    </div>
  );
}

export default App;
