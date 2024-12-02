import React, { Component } from 'react';

// Interface pour les props (aucune prop nécessaire pour l'instant)
interface CounterProps {}

// Interface pour l'état
interface CounterState {
  count: number; // Le compteur est un nombre
}

// Composant basé sur une classe
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état
  state: CounterState = {
    count: 0, // Compteur initialisé à 0
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Méthode render
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

