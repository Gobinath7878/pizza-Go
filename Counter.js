import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log('Rendering');
  const handleCounter = (e) => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <div>
        <p>Counter</p>
      </div>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <span>
          <button onClick={handleCounter}>+</button>
        </span>
        <span>
          <button onClick={handleCounter}>-</button>
        </span>
      </div>
    </>
  );
}

export default Counter;
