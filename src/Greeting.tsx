import React from 'react';

// Interface pour les props
interface GreetingProps {
  name: string; // La prop `name` est requise
}

// Composant fonctionnel typé
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

