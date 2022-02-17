import React from 'react';

const buttonA = <button> Primeiro botão</button>
const buttonB = <button> Segundo botão </button>
const hasCustomer = false

const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      {hasCustomer && (
      <div>Clique no botão abaixo para visualiar o historico dos clientes <br />
    {buttonA}</div> )}
   
    </div>
   ) ;
};
export default App;