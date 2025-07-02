import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState<number>(0);
  const increaseValue = () => {
    // syntax-1
    // setValue(value + 1);
    // syntax-2
    setValue((prevValue) => prevValue + 1);
  };

  // * MCQ (IMP)
  const [count, setCount] = useState<number>(0);
  const handleRandomButtonClick = ()=>{
    // setCount(count+1);
    // setCount(count+2);
    // setCount(count+3);
    // setCount(count+4); // only this will execute

    // to execute all the above then have to write in a syntax
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+2)
    setCount(prevCount => prevCount+3)
    setCount(prevCount => prevCount+4)
  }

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={increaseValue}>+</button>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue((prevValue) => prevValue - 1);
        }}
      >
        -
      </button>


      <br /> <br />
      <button onClick={handleRandomButtonClick} > random button {count} </button>
    </>
  );
}
