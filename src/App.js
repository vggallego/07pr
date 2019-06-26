import React from 'react';
import Pretunta from './components/Pregunta';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pretunta />
        </div>
      </header>
    </div>
  );
}

export default App;
