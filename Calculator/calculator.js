import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className='clcstyle'>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className='inputfield'
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
                className='inputfield'
      />
      <div>
        <button className='sign' onClick={handleAddition}>+</button>
        <button className='sign' onClick={handleSubtraction}>-</button>
        <button className='sign' onClick={handleMultiplication}>*</button>
        <button className='sign' onClick={handleDivision}>/</button>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
