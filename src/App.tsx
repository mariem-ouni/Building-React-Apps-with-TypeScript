import React from 'react';
import Greeting from './Greeting'; // Importer le composant Greeting
import Counter from './Counter';   // Importer le composant Counter

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to my App</h1>
      {/* Utilisation de Greeting */}
      <Greeting name="Mariem" />
      {/* Utilisation de Counter */}
      <Counter />
    </div>
  );
};

export default App;


