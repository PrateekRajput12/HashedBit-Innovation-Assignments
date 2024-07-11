import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';



const root = ReactDOM.createRoot(document.getElementById("root"))
const App = () => {
  return (
    <div className='container'> 
      <h1>Simple Calculator</h1>
      <Calculator />
    </div>
  );
};


root.render(<App/>)